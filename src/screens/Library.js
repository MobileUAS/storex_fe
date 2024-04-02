/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
import HeaderComponent from '../components/HeaderComponent';
import HorizontalLine from '../components/HorizontalLine';

const FAV = [
  {
    image: require('../image/favorite.png'),
    title: 'Favorite',
    artist: 'Playlist . 13 songs',
  },
];

const MUSIC = [
  {
    image: require('../image/yummy.png'),
    title: 'Yummy',
    artist: 'Justin Bieber',
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

const PLAYLIST = [
  {
    image: require('../image/playlist.png'),
    title: 'Autums variations',
    artist: 'ED Sheeran',
  },
];

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderFavItems() {
    return FAV.map((item, index) => (
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
        <Image source={require('../image/playMusic.png')} />
      </View>
    ));
  }

  renderPlaylistItems() {
    return PLAYLIST.map((item, index) => (
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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.header}>
            <HeaderComponent title={'Library'} fontSize={40} />
          </View>

          <View style={styles.containerFav}>
            <HeaderComponent title={'Recent Played'} fontSize={25} />
            <HorizontalLine width={'100%'} alignSelf={'center'} />
            {this.renderFavItems()}
          </View>
          <HorizontalLine width={'80%'} alignSelf={'center'} />
          <View style={styles.containerMusic}>
            <HeaderComponent title={'Songs'} fontSize={25} />
            {this.renderMusicItems()}
          </View>
          <HorizontalLine width={'80%'} alignSelf={'center'} />
          <View style={styles.containerFav}>
            <HeaderComponent title={'Playlist'} fontSize={25} />
            {this.renderPlaylistItems()}
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
    marginBottom: 0,
  },

  containerFav: {
    marginTop: 0,
    marginBottom: 10,
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
});

export default Library;
