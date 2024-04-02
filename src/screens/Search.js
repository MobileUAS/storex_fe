/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
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

const CATEGORY = [
  {
    title: 'Indie',
    image: require('../image/indie.png'),
  },
  {
    title: 'R&B',
    image: require('../image/randb.png'),
  },
  {
    title: 'Hip-Hop',
    image: require('../image/hiphop.png'),
  },
  {
    title: 'K-Pop',
    image: require('../image/kpop.png'),
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
      <View key={index} style={styles.containerMusicPlaylist}>
        <View style={styles.musicItem}>
          <Image source={item.image} style={styles.musicImage} />
          <View style={styles.musicDetails}>
            <Text style={styles.musicTitle}>{item.title}</Text>
            <Text style={styles.musicArtist}>{item.artist}</Text>
          </View>
        </View>
        <Image source={require('../image/playMusic.png')}/>
      </View>
    ));
  }

  renderCategoryItems() {
    return CATEGORY.map((item, index) => (
      <View key={index}>
        <View style={[styles.backgroundCategory, { backgroundColor: this.getBackgroundColor(index) }]}>
          <Text style={styles.categoryTitle}>{item.title}</Text>
          <Image source={item.image} style={styles.categoryImage} />
        </View>
      </View>
    ));
  }

  getBackgroundColor(index) {
    const colors = ['#FF407D', '#40679E', '#FBA834', '#96E9C6'];

    return colors[index % colors.length];
  }

  handleVoicePress = () => {
    Alert.alert('Tombol Voice Ditekan!');
  };

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.header}>
            <HeaderComponent title={'Search'} fontSize={40} />
          </View>

          <View style={styles.containerSearchbar}>
            <TextInput
              style={styles.input}
              placeholder="Search artist or song"
              placeholderTextColor="#dcdcdc"
              onChangeText={text => this.setState({ searchText: text })}
              value={searchText}
            />
            <TouchableOpacity onPress={this.handleVoicePress}>
              <Image
                style={styles.voiceSearchbar}
                source={require('../image/voice.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerMusic}>
            <HeaderComponent title={'Recent Search'} fontSize={25} />
            {this.renderMusicItems()}
          </View>

          <View>
            <HeaderComponent title={'Based on Activity'} fontSize={25} />
            <View style={styles.containerCategory}>
              {this.renderCategoryItems()}
            </View>
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
    padding: 20,
  },

  scrollContainer: {
    marginBottom: 60,
  },

  header: {
    marginBottom: 10,
  },

  containerSearchbar: {
    flexDirection: 'row',
  },

  input: {
    backgroundColor: 'grey',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    width: '85%',
  },

  voiceSearchbar: {
    padding: 15,
    margin: 5,
  },

  containerMusicPlaylist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
  },

  containerMusic: {
    marginBottom: 10,
  },

  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  musicImage: {
    borderRadius: 10,
    width: 70,
    height: 70,
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
  containerCategory: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  backgroundCategory: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  categoryImage: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },

});
export default Search;
