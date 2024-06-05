import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Button, Alert } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome'; // Mengimpor ikon dari react-native-vector-icons
import axios from 'axios';

const Reports = () => {
    const [reports, setReports] = useState([]);

    const fetchReports = async () => {
        try {
            const response = await axios.get('http://192.168.253.173:3000/reports'); // Ganti URL ini dengan URL backend Anda
            setReports(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const labels = reports.map(report => `Report ${report._id}`);
    const stokMasukData = reports.map(report => report.stokMasuk);
    const stokKeluarData = reports.map(report => report.stokKeluar);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Stock In and Out</Text>
                <BarChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: 'Stok Masuk',
                                data: stokMasukData,
                            },
                            {
                                label: 'Stok Keluar',
                                data: stokKeluarData,
                            },
                        ],
                        legend: ["Stok Masuk", "Stok Keluar"],
                    }}
                    width={Dimensions.get('window').width - 30} // from react-native
                    height={220}
                    yAxisLabel=""
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#F6E9B2',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </View>
            <View style={styles.newbutton}>
                <View style={{
                    backgroundColor: "#0A6847",
                    marginRight: 20,
                    borderRadius: 10,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        margin: 10,
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18
                    }}>Reports Details</Text>
                </View>
                <Button
                    title="Create"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>
            {reports.map(report => (
                <View key={report._id} style={styles.item}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{report.productID.nama}</Text>
                        <Text>{report.suplierID.nama}</Text>
                        <Text>{report.distributorID.nama}</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Jumlah: {report.jumlah}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="arrow-down" size={16} color="#0A6847" />
                            <Text style={{ color: '#0A6847', marginLeft: 5 }}>Stok Masuk: {report.stokMasuk}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="arrow-up" size={16} color="#F60C0C" />
                            <Text style={{ color: '#F60C0C', marginLeft: 5 }}>Stok Keluar: {report.stokKeluar}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F7F7ED"
    },
    chartContainer: {
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 18,
        marginBottom: 10,
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
});

export default Reports;
