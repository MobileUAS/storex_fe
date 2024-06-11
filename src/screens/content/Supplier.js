import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { connection } from '../../../connection';
import Header from '../../components/Header';
import User from '../../components/User';

const Supplier = () => {
  const [Supplier, setSupplier] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleSupplier = async () => {
    try {
      const response = await axios.get(`http://${connection}supliers`);
      setSupplier(response.data);
    } catch (error) {
      console.error('Error fetching Supplier:', error);
    }
  };

  const handleSave = async () => {
    try {
      const { nama, alamat,  } = selectedSupplier;

      if (isCreating) {
        await axios.post(`http://${connection}supliers`, { nama, alamat,  });
        Alert.alert("Create", "Supplier created successfully.");
      } else {
        const { _id } = selectedSupplier;
        await axios.put(`http://${connection}supliers/${_id}`, { nama, alamat,  });
        Alert.alert("Update", `Supplier with id ${_id} updated.`);
      }

      handleSupplier(); // Refresh the Supplier list
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving Supplier:', error.response || error.message || error);
      Alert.alert("Error", `Failed to save Supplier: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://${connection}supliers/${id}`);
      Alert.alert("Delete", `Supplier with id ${id} deleted.`);
      handleSupplier(); // Refresh the Supplier list
    } catch (error) {
      console.error('Error deleting Supplier:', error.response || error.message || error);
      Alert.alert("Error", `Failed to delete Supplier: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const openModal = (Supplier, create = false) => {
    setSelectedSupplier(Supplier || { nama: '', alamat: '' });
    setIsCreating(create);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSupplier(null);
    setIsCreating(false);
  };

  const handleInputChange = (name, value) => {
    setSelectedSupplier({ ...selectedSupplier, [name]: value });
  };

  useEffect(() => {
    handleSupplier();
  }, []);

  return (
    <ScrollView>
      <Header/>
      <User/>
      <View style={style.container}>
      <View style={style.newButton}>
        <View style={style.header}>
          <Text style={style.headerText}>Supplier Detail</Text>
        </View>
        <TouchableOpacity style={style.createButton} onPress={() => openModal(null, true)}>
          <Text style={style.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
      {Supplier.map((Supplier) => (
        <View key={Supplier._id} style={style.item}>
          <View>
            <Text style={style.SupplierName}>{Supplier.nama}</Text>
            <Text>{Supplier.alamat}</Text>
          </View>
          <View style={style.actions}>
            <TouchableOpacity onPress={() => openModal(Supplier)} style={style.iconButton}>
              <Icon name="edit" size={20} color="#007BFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(Supplier._id)} style={style.iconButton}>
              <Icon name="trash" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {selectedSupplier && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={style.modalContainer}>
            <Text style={style.modalTitle}>{isCreating ? 'Create Supplier' : 'Update Supplier'}</Text>
            <TextInput
              style={style.input}
              placeholder="Name"
              value={selectedSupplier.nama}
              onChangeText={(text) => handleInputChange('nama', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Alamat"
              value={String(selectedSupplier.alamat)}
              onChangeText={(text) => handleInputChange('alamat', text)}
            />
            <View style={style.buttonContainer}>
              <Button title="Cancel" onPress={closeModal} color="red" />
              <Button title={isCreating ? "Create" : "Update"} onPress={handleSave} />
            </View>
          </View>
        </Modal>
      )}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7ED",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6E9B2',
  },
  itemTextBold: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  newButton: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#0A6847',
    marginRight: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    margin: 10,
    color: 'white',
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
  createButton: {
    backgroundColor: '#F3CA52',
    padding: 10,
    borderRadius: 10,
  },
  createButtonText: {
    color: "black",
    fontFamily: "Poppins-Bold",
    fontSize: 15,
  },
  SupplierName: {
    color: '#0A6847',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
});

export default Supplier;
