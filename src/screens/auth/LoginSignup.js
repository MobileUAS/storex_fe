import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <SafeAreaView>
          <View style={{ height: 100 }} />
          <Icon2
            style={{ textAlign: 'center' }}
            name="home-repair-service"
            size={120}
            color="black"
          />
          <View style={{ height: 180 }} />
          <Text style={{ color: 'black', fontSize: 40, textAlign: 'center', fontFamily: 'Poppins-Bold' }}>
            GROW
          </Text>
          <Text style={{ marginTop: -20, color: 'black', fontSize: 40, textAlign: 'center', fontFamily: 'Poppins-Bold' }}>
            YOUR BUSINESS
          </Text>
          <Text style={{ marginTop:-15,color: 'black', fontSize: 15, textAlign: 'center', fontFamily: 'Poppins-Regulr' }}>
            We will help you to grown your business using online Management
          </Text>

          <View style={{ height: 40 }} />
          <View style={styles.buttonContainer}>  
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Bold' }}>
                Login
              </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: 'black', fontFamily: 'Poppins-Bold' }}>
                Sign Up
              </Text>
            </Pressable>
          </View>
          <Text style={{color:'black', marginTop:20, textAlign:'center', fontSize:10, fontFamily:'Poppins-Bold'}}>
            HOW WE WORK?
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingHorizontal:50,
    
  },
});

export default LoginSignup;
