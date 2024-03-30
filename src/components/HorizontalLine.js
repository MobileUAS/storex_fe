/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalLine = ({width, alignSelf}) => {
  return (
    <View
      style={[
        styles.line,
        {width: width, alignSelf: alignSelf || 'flex-start'},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#888888', // Warna garis
    borderBottomWidth: 1, // Lebar garis default
    marginVertical: 10, // Jarak vertikal dari garis ke konten sekitarnya
  },
});

export default HorizontalLine;
