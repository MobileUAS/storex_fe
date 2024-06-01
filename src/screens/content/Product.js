import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Ini Product Page</Text>
      </View>
    );
  }
}

export default Product;
