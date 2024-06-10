import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/images/logo/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={{ height: 100 }} />
          <Text style={styles.title}>GROW</Text>
          <Text style={[styles.title, { marginTop: -20 }]}>YOUR BUSINESS</Text>
          <Text style={styles.subtitle}>
            We will help you to grow your business using online Management
          </Text>

          <View style={{ height: 40 }} />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
          <Text style={styles.howWeWork}>HOW WE WORK?</Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    marginTop: -15,
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#F3CA52',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  howWeWork: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
});

export default LoginSignup;
