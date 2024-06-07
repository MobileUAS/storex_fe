import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import User from '../../components/User';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCard(data) {
    return (
      <View style={styles.cardContainer} key={data.id}>
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
      </View>
    );
  }

  render() {
    const cardData = [
      {
        id: 1,
        title: 'Detail Stock Product',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Product On Stock',
        itemPrice: 'Rp. 15.000',
      },
      {
        id: 2,
        title: 'Detail Stock Product',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Product On Stock',
        itemPrice: 'Rp. 15.000',
      },
      {
        id: 3,
        title: 'Detail Stock Product',
        image: require('../../../assets/images/icon/inventory.png'),
        itemName: 'Product On Stock',
        itemPrice: 'Rp. 15.000',
      },
      // Add more card data as needed
    ];

    return (
      <ScrollView style={styles.baseApp}>
        <Header />
        <User />
        <View style={styles.content}>
          {cardData.map(item => this.renderCard(item))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  baseApp: {
    backgroundColor: '#f5f3e8',
  },
  content: {
    marginTop: 30,
  },
  cardContainer: {
    alignItems: 'center',
    margin: 10,
  },
  titleContainer: {
    backgroundColor: '#27795b',
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 33,
    paddingRight: 33,
    borderRadius: 10,
    elevation: 5,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  itemContainer: {
    marginTop: 5,
    borderRadius: 10,
    padding: 15,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#f6e9b2',
    elevation: 1,
  },
  inventoryIcon: {},
  itemText: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
});

export default Dashboard;
