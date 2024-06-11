import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [showProduct, setShowProduct] = useState(false);
  const navigation = useNavigation();

  const toggleProductVisibility = () => {
    setShowProduct(!showProduct);
  };

  // Array untuk menyimpan ikon-ikon tambahan pada header
  const additionalIcons = [
    { name: 'home-repair-service', text: 'Product', screen: 'Product' }, 
    { name: 'package-variant-closed', text: 'Supplier', screen: 'Supplier' },
    { name: 'package-variant', text: 'Distributors', screen: 'Distributor' },
    { name: 'clipboard-notes', text: 'Reports', screen: 'Reports' },
    // Tambahkan ikon tambahan disini dengan object yang berisi 'name', 'text', dan 'screen'
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <View style={styles.headerApp}>
        <View style={styles.headerLogo}>
          <Image
            source={require('../../assets/images/logo/logo.png')}
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>STOREX</Text>
        </View>

        <TouchableOpacity onPress={toggleProductVisibility}>
          <Image
            source={require('../../assets/images/icon/sidenav.png')}
            style={styles.sideNav}
          />
        </TouchableOpacity>
      </View>

      {/* Menampilkan ikon tambahan */}
      {showProduct && (
        <View style={styles.productContainer}>
          {additionalIcons.map((icon, index) => {
            let IconComponent = null;

            if (icon.name === 'home-repair-service') {
              IconComponent = Icon2;
            } else if (icon.name === 'package-variant-closed' || icon.name === 'package-variant') {
              IconComponent = Icon;
            } else if (icon.name === 'clipboard-notes') {
              IconComponent = Icon3;
            }

            return (
              <TouchableOpacity key={index} style={styles.productButton} onPress={() => navigateToScreen(icon.screen)}>
                <IconComponent
                  style={styles.productIcon}
                  name={icon.name}
                  size={25}
                  color="white"
                />
                <View style={styles.productTextContainer}>
                  <Text style={styles.productText}>{icon.text}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
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
  productContainer: {
    padding:20,
    backgroundColor:"#FDFFE2"
  },
  productButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productIcon: {
    marginRight: 10,
    color:'black',
  },
  productTextContainer: {
    justifyContent: 'center',
  },
  productText: {
    color: 'black',
    fontSize: 15,
  },
});

export default Header;
