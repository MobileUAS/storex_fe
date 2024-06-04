import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegis = async () => {
    try {

    } catch (error) {

    }
  }
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flext:1,
    backgroundColor:'#0A6847',
    alignItems:'center',
    justifyContent:'center'
  }, 
  header: {
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
  }
})

export default Register;
