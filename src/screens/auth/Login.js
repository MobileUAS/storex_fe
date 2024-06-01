import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(246, 233, 178, 0.5)'
      }}>
      <View style={{
        height:80
      }}/>
      <Icon2
          style={{ textAlign: "center" }}
          name="home-repair-service"
          size={50}
          color="black"
        />
        <Text
          style={{
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          STOREX
        </Text>

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
