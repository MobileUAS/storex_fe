/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import NavBar from '../components/NavBar';

const MUSIC = [
  {
    image: require('../image/anniemarrie.png'),
    title: '2002',
    artist: 'Annie-Marrie',
  },
  {
    image: require('../image/cleanbandit.png'),
    title: 'Symphony',
    artist: 'Clean Bandit',
  },
  {
    image: require('../image/dualipa.png'),
    title: 'Levitating',
    artist: 'Dua Lipa, DaBaby',
  },
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  renderMusicItems() {
    return MUSIC.map((item, index) => (
      <View key={index}>
        <View style={styles.musicItem}>
          <Image source={item.image} style={styles.musicImage} />
          <View style={styles.musicDetails}>
            <Text style={styles.musicTitle}>{item.title}</Text>
            <Text style={styles.musicArtist}>{item.artist}</Text>
          </View>
        </View>
      </View>
    ));
  }

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.header}>
            <HeaderComponent title={'Search'} fontSize={40} />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Search artist or song" // Menambahkan placeholder
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ searchText: text })} // Mengubah state searchText saat teks berubah
            value={searchText} // Mengatur nilai TextInput dari state
          />

          <View style={styles.containerMusic}>
            <HeaderComponent title={'Recent Search'} fontSize={25} />
            {this.renderMusicItems()}
          </View>
        </ScrollView>
        <NavBar navigation={this.props.navigation} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  header: {
    marginBottom: 10,
  },

  input: {
    backgroundColor:"grey",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:"grey",
  },

  containerMusic: {
    marginBottom: 55,
  },

  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  musicImage: {
    borderRadius: 10,
    width:70,
    height:70,
  },

  musicDetails: {
    marginLeft: 20,
  },

  musicTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'black',
    fontSize: 15,
  },

})
export default Search;
