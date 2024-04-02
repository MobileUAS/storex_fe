/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const NavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('../image/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Image source={require('../image/explore.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Library')}>
        <Image source={require('../image/artist.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
