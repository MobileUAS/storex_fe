import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      // console.log('Sending email:', email);
      // console.log('Sending password:', password);
  
      const response = await axios.post('http://192.168.1.5:3000/users/login', { email, password });//gae ip dewe dewe rek ipconfig moro doleono Ipv4
      console.log('Response data:', response.data);
  
      if (response.data.message === "Login successful") {
        Alert.alert('Login Success', 'You have logged in successfully');
      } else {
        Alert.alert('Login Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      console.error('Error response:', error.response);
      Alert.alert('Login Error', 'An error occurred during login');
    }
  };


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
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="white" style={styles.icon} />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={rememberMe ? 'checked' : 'unchecked'}
          onPress={() => setRememberMe(!rememberMe)}
          style={styles.checkbox}
          color="white"
        />
        <Text style={styles.checkboxLabel}>Remember me</Text>
        <TouchableOpacity onPress={() => {}} style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ height: 30 }} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A6847',
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
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  highlight: {
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
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
    color: 'white',
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
    color: 'white',
  },
  forgotPasswordContainer: {
    marginLeft: 50,
  },
  forgotPassword: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3CA52',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
    fontSize: 16,
  },
  createAccountButton: {
    marginTop: 10,
  },
  createAccountText: {
    color: 'white',
  },
});

export default Login;
