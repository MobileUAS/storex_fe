import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { connection } from '../../../connection';

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://${connection}users/resetPassword`, {
        email,
        oldPassword,
        newPassword,
      });

      if (response.data.message.toLowerCase() === "password changed successfully") {
        Alert.alert('Success', 'Password changed successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      console.error('Reset password error:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        Alert.alert('Error', error.response.data.message || 'An error occurred during password reset');
      } else {
        Alert.alert('Error', 'An error occurred during password reset');
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
          STO<Text style={styles.highlight}>REX</Text>
        </Text>
        <Text style={styles.subtitle}>Reset Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="envelope" size={20} color="white" style={styles.icon} />
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
            value={oldPassword}
            onChangeText={setOldPassword}
            style={styles.textInput}
            placeholder="Enter your old password"
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="white" style={styles.icon} />
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword}
            style={styles.textInput}
            placeholder="Enter your new password"
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
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
  logo: {
    width: 70,
    height: 70,
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3CA52',
    paddingHorizontal: 90,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ResetPassword;
