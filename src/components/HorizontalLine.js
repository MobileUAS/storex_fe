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
    borderBottomColor: '#888888',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default HorizontalLine;
