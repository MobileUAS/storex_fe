import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegis = async () => {
    try {
      const response = await axios.post('http://18.18.18.134:3000/users/regis', { username, email, password });
      console.log('Response data:', response.data);
  
      if (response.data.message === "User registered successfully") {
        Alert.alert('Registration Success', 'You have registered successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Registration Error', response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        Alert.alert('Registration Error', error.response.data.message || 'Registration failed');
      } else {
        Alert.alert('Registration Error', 'An error occurred during registration');
      }
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
          STOREX
        </Text>
        <Text style={styles.subtitle}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
            placeholder="Enter your username"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon1 name="email" size={20} color="white" style={styles.icon} />
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
        <TouchableOpacity style={styles.button} onPress={handleRegis}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A6847',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    width: '100%',
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3CA52',
    paddingVertical: 10,
    paddingHorizontal: 140,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export default Register;
