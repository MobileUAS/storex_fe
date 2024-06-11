import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import User from '../../components/User';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCard(data) {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        key={data.id}
        onPress={() => this.handleCardPress(data.id)}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{data.title}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image source={data.image} style={styles.inventoryIcon} />
          <View>
            <Text style={styles.itemText}>{data.itemName}</Text>
            <Text style={styles.itemText}>{data.itemPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  handleCardPress(id) {
    const { navigation } = this.props;
    switch (id) {
      case 1:
        navigation.navigate('Product');
        break;
      case 2:
        navigation.navigate('Supplier');
        break;
      case 3:
        navigation.navigate('Distributor');
        break;
      case 4:
        navigation.navigate('Reports');
        break;
      default:
        break;
    }
  }

  render() {
    const cardData = [
      {
        id: 1,
        title: 'Detail Stock Product',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Product On Stock',
        itemPrice: '6000',
      },
      {
        id: 2,
        title: 'Detail Supplier',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Amount Of Supplier',
        itemPrice: '10.000',
      },
      {
        id: 3,
        title: 'Detail Distributor',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Amount Of Distributor',
        itemPrice: '5000',
      },
      {
        id: 4,
        title: 'Detail Reports',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Reports',
        itemPrice: '4000',
      },
      // Add more card data as needed
    ];

    return (
      <ScrollView style={styles.baseApp}>
        <Header />
        <User />
        <View style={styles.content}>
          {cardData.map((item) => this.renderCard(item))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseApp: {
    backgroundColor: '#FDFFE2',
  },
  content: {
    marginTop: 30,
    alignItems: 'center', // Center content horizontally
  },
  cardContainer: {
    width: '90%', // Fixed width for all cards
    alignItems: 'center',
    marginVertical: 10, // Adjusted for vertical margin consistency
  },
  titleContainer: {
    backgroundColor: '#27795b',
    paddingVertical: 7,
    paddingHorizontal: 33,
    borderRadius: 10,
    elevation: 5,
    width: '100%', // Ensure it takes full card width
    alignItems: 'center', // Center the title text horizontally
  },
  titleText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center', // Ensure the text is centered
  },
  itemContainer: {
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6e9b2',
    elevation: 1,
    width: '100%', // Ensure it takes full card width
  },
  inventoryIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Maintain aspect ratio of the icon
  },
  itemText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginLeft: 10, // Ensure there's space between the icon and text
  },
});

export default Dashboard;
