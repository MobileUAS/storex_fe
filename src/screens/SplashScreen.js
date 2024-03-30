/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 2000);
  }
  render() {
    return (
      <View>
        <Text>Ini SplashScreen</Text>
      </View>
    );
  }
}

export default SplashScreen;
