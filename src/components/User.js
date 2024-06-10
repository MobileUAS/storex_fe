import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const User = ({username = 'USER', joinDate = 'tanggal'}) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.userProfile}>
        <Image
          source={require('../../assets/images/icon/userdummy.png')}
          style={styles.userImg}
        />
      </View>
      <View style={styles.userDesc}>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.userDate}>Join at - {joinDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#f4dc94',
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  userImg: {
    borderRadius: 20,
  },
  welcome: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'black',
  },
  userName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: 'black',
  },
  userDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'black',
  },
});

export default User;