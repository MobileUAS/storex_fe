import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Modal, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { connection } from '../../../connection';

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [distributors, setDistributors] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentReport, setCurrentReport] = useState(null);
    const [formData, setFormData] = useState({
        jumlah: '',
        stokMasuk: '',
        stokKeluar: '',
        barangID: '',
        suplierID: '',
        distributorID: '',
    });

    const fetchReports = async () => {
        try {
            const response = await axios.get(`http://${connection}reports`);
            setReports(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://${connection}products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get(`http://${connection}supliers`);
            setSuppliers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchDistributors = async () => {
        try {
            const response = await axios.get(`http://${connection}distributors`);
            setDistributors(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchReports();
        fetchProducts();
        fetchSuppliers();
        fetchDistributors();
    }, []);

    const handleInputChange = (name, value) => {
        if (name === 'barangID') {
            const selectedProduct = products.find(product => product._id === value);
            if (selectedProduct) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    barangID: value,
                    jumlah: selectedProduct.jumlah.toString(),
                }));
            }
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleCreateOrUpdateReport = async () => {
        try {
            if (currentReport) {
                await axios.put(`http://${connection}reports/${currentReport._id}`, formData);
            } else {
                await axios.post(`http://${connection}reports`, formData);
            }
            setModalVisible(false);
            fetchReports();
        } catch (error) {
            console.error(error);
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
        }
    };

    const handleEditReport = (report) => {
        setCurrentReport(report);
        setFormData({
            jumlah: report.jumlah.toString(),
            stokMasuk: report.stokMasuk.toString(),
            stokKeluar: report.stokKeluar.toString(),
            barangID: report.barangID._id, // Ensure these fields are set to the correct ID values
            suplierID: report.suplierID._id, // Ensure these fields are set to the correct ID values
            distributorID: report.distributorID._id, // Ensure these fields are set to the correct ID values
        });
        setModalVisible(true);
    };

    const handleDeleteReport = async (id) => {
        try {
            await axios.delete(`http://${connection}reports/${id}`);
            fetchReports();
        } catch (error) {
            console.error(error);
            Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
        }
    };

    const handleOpenModal = () => {
        setCurrentReport(null);
        setFormData({
            jumlah: '', // This will be updated based on product selection
            stokMasuk: '',
            stokKeluar: '',
            barangID: '',
            suplierID: '',
            distributorID: '',
        });
        setModalVisible(true);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.newbutton}>
                <View style={{ backgroundColor: "#0A6847", marginRight: 20, borderRadius: 10, paddingHorizontal: 10 }}>
                    <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Reports Details</Text>
                </View>
                <View style={{ backgroundColor: "#F3CA52", marginRight: 20, borderRadius: 10, paddingHorizontal: 10 }}>
                    <TouchableOpacity onPress={handleOpenModal}>
                        <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {reports.map(report => (
                <View key={report._id} style={styles.item}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {report.barangID?.nama || 'Unknown Product'}
                        </Text>
                        <Text>
                            {report.suplierID?.nama || 'Unknown Supplier'}
                        </Text>
                        <Text>
                            {report.distributorID?.nama || 'Unknown Distributor'}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>
                            Jumlah: {report.jumlah}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="arrow-down" size={16} color="#0A6847" />
                            <Text style={{ color: '#0A6847', marginLeft: 5 }}>
                                Stok Masuk: {report.stokMasuk}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="arrow-up" size={16} color="#F60C0C" />
                            <Text style={{ color: '#F60C0C', marginLeft: 5 }}>
                                Stok Keluar: {report.stokKeluar}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => handleEditReport(report)} style={styles.editButton}>
                                <Text style={{ color: 'white' }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteReport(report._id)} style={styles.deleteButton}>
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <RNPickerSelect
                        placeholder={{ label: "Pilih Produk", value: null }}
                        value={formData.barangID}
                        onValueChange={(value) => handleInputChange('barangID', value)}
                        items={products
                            .filter(product => product.nama && product._id)
                            .map(product => ({
                                label: product.nama,
                                value: product._id,
                                key: product._id,
                            }))}
                        style={pickerSelectStyles}
                        useNativeAndroidPickerStyle={false}
                    />
                    <RNPickerSelect
                        placeholder={{ label: "Pilih Suplier", value: null }}
                        value={formData.suplierID}
                        onValueChange={(value) => handleInputChange('suplierID', value)}
                        items={suppliers
                            .filter(supplier => supplier.nama && supplier._id)
                            .map(supplier => ({
                                label: supplier.nama,
                                value: supplier._id,
                                key: supplier._id,
                            }))}
                        style={pickerSelectStyles}
                        useNativeAndroidPickerStyle={false}
                    />
                    <RNPickerSelect
                        placeholder={{ label: "Pilih Distributor", value: null }}
                        value={formData.distributorID}
                        onValueChange={(value) => handleInputChange('distributorID', value)}
                        items={distributors
                            .filter(distributor => distributor.nama && distributor._id)
                            .map(distributor => ({
                                label: distributor.nama,
                                value: distributor._id,
                                key: distributor._id,
                            }))}
                        style={pickerSelectStyles}
                        useNativeAndroidPickerStyle={false}
                    />
                    <TextInput
                        placeholder="Jumlah"
                        value={formData.jumlah}
                        onChangeText={(value) => handleInputChange('jumlah', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Stok Masuk"
                        value={formData.stokMasuk}
                        onChangeText={(value) => handleInputChange('stokMasuk', value)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Stok Keluar"
                        value={formData.stokKeluar}
                        onChangeText={(value) => handleInputChange('stokKeluar', value)}
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={handleCreateOrUpdateReport} style={styles.modalButton}>
                        <Text style={{ color: 'white' }}>{currentReport ? "Update Report" : "Create Report"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                        <Text style={{ color: 'white' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F7F7ED"
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F6E9B2'
    },
    newbutton: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
    },
    editButton: {
        backgroundColor: '#0A6847',
        padding: 10,
        marginRight: 5,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#F60C0C',
        padding: 10,
        borderRadius: 5,
    },
    modalButton: {
        backgroundColor: '#0A6847',
        padding: 10,
        marginRight: 5,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        width: 200,
    },
    cancelButton: {
        backgroundColor: '#F60C0C',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        width: 200,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#F6E9B2",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#f5f2e4'
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 200,
        height: 40,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        marginBottom: 10,
    },
    inputAndroid: {
        width: 200,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor : "#f5f2e4",
        color: 'black',
        paddingRight: 30,
        marginBottom: 10,
    },
});

export default Reports;
