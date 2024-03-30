/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavBar from '../components/NavBar';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        {/* Height nde iki iso diilangi */}
        <Text style={{height: 100}}>Search</Text>
        {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity> */}

      <NavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Search;
