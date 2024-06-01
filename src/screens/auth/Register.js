import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Text>Ini Register Page</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Masuk Ke Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
