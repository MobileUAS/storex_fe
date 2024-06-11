import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UserContext } from '../../reactContext'; // Adjust the path as necessary
import axios from 'axios';
import { connection } from '../../connection';

const User = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://${connection}users/${user._id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  if (!userDetails) {
    return <Text>Loading...</Text>;
  }

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
        <Text style={styles.userName}>{userDetails.username}</Text>
        <Text style={styles.userDate}>Join at - {new Date(userDetails.registrationDate).toLocaleDateString()}</Text>
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
