import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Text>Ini Login Page</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Masuk Ke Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Masuk Ke Dashboard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
