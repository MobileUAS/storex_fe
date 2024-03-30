/* eslint-disable prettier/prettier */
// HeaderComponent.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderComponent = ({title, fontSize}) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, {fontSize: fontSize}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    alignItems: 'left',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderComponent;
