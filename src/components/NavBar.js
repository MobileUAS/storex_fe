/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const NavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Library')}>
        <Text style={styles.buttonText}>Library</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Warna latar belakang navbar
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // Tinggi navbar
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Warna garis atas navbar
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NavBar;
