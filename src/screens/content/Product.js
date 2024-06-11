import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Modal, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { connection } from '../../../connection';
import Header from '../../components/Header';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleProduct = async () => {
    try {
      const response = await axios.get(`http://${connection}products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSave = async () => {
    try {
      const { nama, harga, jumlah } = selectedProduct;

      if (isCreating) {
        await axios.post(`http://${connection}products`, { nama, harga, jumlah });
        Alert.alert("Create", "Product created successfully.");
      } else {
        const { _id } = selectedProduct;
        await axios.put(`http://${connection}products/${_id}`, { nama, harga, jumlah });
        Alert.alert("Update", `Product with id ${_id} updated.`);
      }

      handleProduct(); // Refresh the product list
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving product:', error.response || error.message || error);
      Alert.alert("Error", `Failed to save product: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://${connection}products/${id}`);
      Alert.alert("Delete", `Product with id ${id} deleted.`);
      handleProduct(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error.response || error.message || error);
      Alert.alert("Error", `Failed to delete product: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  const openModal = (product, create = false) => {
    setSelectedProduct(product || { nama: '', harga: '', jumlah: '' });
    setIsCreating(create);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
    setIsCreating(false);
  };

  const handleInputChange = (name, value) => {
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <ScrollView>
      <Header/>
      <View style={style.container}>
      <View style={style.newButton}>
        <View style={style.header}>
          <Text style={style.headerText}>Products Detail</Text>
        </View>
        <TouchableOpacity style={style.createButton} onPress={() => openModal(null, true)}>
          <Text style={style.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
      {products.map((product) => (
        <View key={product._id} style={style.item}>
          <View>
            <Text style={style.productName}>{product.nama}</Text>
            <Text>{product.harga}</Text>
            <Text>{product.jumlah}</Text>
          </View>
          <View style={style.actions}>
            <TouchableOpacity onPress={() => openModal(product)} style={style.iconButton}>
              <Icon name="edit" size={20} color="#007BFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(product._id)} style={style.iconButton}>
              <Icon name="trash" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {selectedProduct && (
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={style.modalContainer}>
            <Text style={style.modalTitle}>{isCreating ? 'Create Product' : 'Update Product'}</Text>
            <TextInput
              style={style.input}
              placeholder="Name"
              value={selectedProduct.nama}
              onChangeText={(text) => handleInputChange('nama', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Price"
              keyboardType="numeric"
              value={String(selectedProduct.harga)}
              onChangeText={(text) => handleInputChange('harga', text)}
            />
            <TextInput
              style={style.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={String(selectedProduct.jumlah)}
              onChangeText={(text) => handleInputChange('jumlah', text)}
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
  productName: {
    color: '#0A6847',
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
});

export default Product;
