import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { connection } from '../../../connection';
import Header from '../../components/Header';

const Distributor = () => {
  const [Distributor, setDistributor] = useState([]);
  const [selectedDistributor, setSelectedDistributor] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleDistributor = async () => {
    try {
      const response = await axios.get(`http://${connection}distributors`);
      setDistributor(response.data);
    } catch (error) {
      console.error('Error fetching Distributor:', error);
    }
  };

  const handleSave = async () => {
    try {
      const { nama, alamat,  } = selectedDistributor;

      if (isCreating) {
        await axios.post(`http://${connection}distributors`, { nama, alamat,  });
        Alert.alert("Create", "Distributor created successfully.");
      } else {
        const { _id } = selectedDistributor;
        await axios.put(`http://${connection}distributors/${_id}`, { nama, alamat,  });
        Alert.alert("Update", `Distributor with id ${_id} updated.`);
      }

      handleDistributor(); // Refresh the Distributor list
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving Distributor:', error.response || error.message || error);
      Alert.alert("Error", `Failed to save Distributor: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://${connection}distributors/${id}`);
      Alert.alert("Delete", `Distributor with id ${id} deleted.`);
      handleDistributor(); // Refresh the Distributor list
    } catch (error) {
      console.error('Error deleting Distributor:', error.response || error.message || error);
      Alert.alert("Error", `Failed to delete Distributor: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const openModal = (Distributor, create = false) => {
    setSelectedDistributor(Distributor || { nama: '', alamat: '' });
    setIsCreating(create);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDistributor(null);
    setIsCreating(false);
  };

  const handleInputChange = (name, value) => {
    setSelectedDistributor({ ...selectedDistributor, [name]: value });
  };

  useEffect(() => {
    handleDistributor();
  }, []);

  return (
    <ScrollView>
      <Header/>
      <View style={style.container}>
      <View style={style.newButton}>
        <View style={style.header}>
          <Text style={style.headerText}>Distributor Detail</Text>
        </View>
        <TouchableOpacity style={style.createButton} onPress={() => openModal(null, true)}>
          <Text style={style.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
      {Distributor.map((Distributor) => (
        <View key={Distributor._id} style={style.item}>
          <View>
            <Text style={style.DistributorName}>{Distributor.nama}</Text>
            <Text>{Distributor.alamat}</Text>
          </View>
          <View style={style.actions}>
            <TouchableOpacity onPress={() => openModal(Distributor)} style={style.iconButton}>
              <Icon name="edit" size={20} color="#007BFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(Distributor._id)} style={style.iconButton}>
              <Icon name="trash" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {selectedDistributor && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={style.modalContainer}>
            <Text style={style.modalTitle}>{isCreating ? 'Create Distributor' : 'Update Distributor'}</Text>
            <TextInput
              style={style.input}
              placeholder="Name"
              value={selectedDistributor.nama}
              onChangeText={(text) => handleInputChange('nama', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Alamat"
              value={String(selectedDistributor.alamat)}
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
  DistributorName: {
    color: '#0A6847',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
});

export default Distributor;
