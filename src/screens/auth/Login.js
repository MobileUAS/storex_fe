import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  toggleRememberMe = () => {
    this.setState({ rememberMe: !this.state.rememberMe });
  }

  render() {
    const { navigation } = this.props;
    const { email, password, rememberMe } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/logo/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            STO<Text style={styles.highlight}>REX</Text>
          </Text>
          <Text style={styles.subtitle}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="user" size={20} color="black" style={styles.icon} />
            <TextInput
              value={email}
              onChangeText={this.handleEmailChange}
              style={styles.textInput}
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={20} color="black" style={styles.icon} />
            <TextInput
              value={password}
              onChangeText={this.handlePasswordChange}
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={rememberMe ? 'checked' : 'unchecked'}
            onPress={this.toggleRememberMe}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
          <TouchableOpacity onPress={() => {}} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{height:30}}/>
        <Text style={{}}>
          CREATE ACCOUNT
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3CA52',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  highlight: {
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
  },
  inputContainer: {
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    marginRight: 20,
  },
  forgotPasswordContainer: {
    marginLeft: 50,
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily:'Poppins-Regular',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Login;
