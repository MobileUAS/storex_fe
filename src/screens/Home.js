/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import HorizontalLine from '../components/HorizontalLine';
import NavBar from '../components/NavBar';

const MUSIC = [
  {
    image: require('../image/yummy.png'),
    title: 'Yummy . 2020',
    artist: 'Justin Bieber',
  },
  {
    image: require('../image/dynamite.png'),
    title: 'Dynamite . 2020',
    artist: 'BTS',
  },
  {
    image: require('../image/ayearago.png'),
    title: 'A Year Ago . 2024',
    artist: 'James Arthur',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <HorizontalLine width={'70%'} alignSelf={'flex-end'} />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <HeaderComponent title={'Discover'} fontSize={40} />
            <Text style={styles.description}>
              based on your streaming activity
            </Text>
          </View>
          <View>
            <ImageBackground
              source={require('../image/heroImage.png')}
              style={styles.heroimg}
              imageStyle={{borderRadius: 20}}>
              <View style={styles.fonthero}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: '70%',
                  }}>
                  Official Video Music
                </Text>
                <HorizontalLine width={'70%'} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../image/profile.png')}
                    style={{height: 35, width: 35, marginRight: 5}}
                  />
                  <Text style={{color: '#888888'}}>by One dek</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.containerMusic}>
            <HeaderComponent title={'Popular'} fontSize={30} />
            <HorizontalLine width={'100%'} />
            {this.renderMusicItems()}
          </View>

          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
            <Text>Pindah Sceen ke Detail</Text>
          </TouchableOpacity> */}
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

  heroimg: {
    width: 346,
    height: 229,
  },

  fonthero: {
    marginLeft: 20,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },

  description: {
    fontSize: 15,
  },

  containerMusic: {
    marginBottom: 60,
  },

  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  musicImage: {
    borderRadius: 10,
  },

  musicDetails: {
    marginLeft: 20,
  },

  musicTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  musicArtist: {
    color: 'gray',
    fontSize: 16,
  },
});

export default Home;
