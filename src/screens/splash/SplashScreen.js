/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import {StackActions} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('LoginSignup'));
    }, 2000);
  }
  render() {
    return (
      <View style={{
        flex:1, backgroundColor: '#0A6847'
      }}>
        <SafeAreaView>
        <View style={{ height: 250 }} />
        <Icon2
          style={{ textAlign: "center" }}
          name="home-repair-service"
          size={80}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          STOREX
        </Text>

        <Text 
          style={{
            color: "#F6E9B2",
            fontSize:20,
            fontWeight: "medium",
            textAlign: "center"
          }}
        >
          Store Anything Anywhere
        </Text>

        <View style={{ height: 300 }}/>
        <Text style={{
          color:"white",
          fontSize:10,
          fontWeight:'normal',
          textAlign: 'center'
        }}>
          Copyrights & All Rights Reversed By Jidat
        </Text>

        </SafeAreaView>
      </View>
    );
  }
}

export default SplashScreen;
