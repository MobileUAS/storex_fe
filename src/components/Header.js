import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerApp}>
      <View style={styles.headerLogo}>
        <Image
          source={require('../../assets/images/logo/logo.png')}
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>STOREX</Text>
      </View>
      {/* <TouchableOpacity onPress={}> */}
      <View>
        <Image
          source={require('../../assets/images/icon/sidenav.png')}
          style={styles.sideNav}
        />
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerApp: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#27795b',
    justifyContent: 'space-between',
  },
  headerLogo: {
    flexDirection: 'row',
    padding: 5,
  },
  headerIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: 'white',
    paddingTop: 10,
  },
  sideNav: {
    width: 30,
    height: 23,
    margin: 20,
  },
});

export default Header;