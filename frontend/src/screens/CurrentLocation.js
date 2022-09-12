import React, { useState, useEffect } from 'react';

import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
// import ImagePreview from './src/screens/ImagePreview';

const CurrentLocation = ({ locations, setLocation}) => {
  // const [locations, setLocation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const getLocation = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let locations = await Location.getCurrentPositionAsync({});
    setLocation(locations);
  }

  let location = 'Waiting..';
  if (errorMsg) {
    location = errorMsg;
  } else if (locations) {
    location = JSON.stringify(locations);
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.locationbtn} onPress={() => getLocation()}>
        <Text style={styles.locationtext} >Location</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  locationbtn: {
    width: "80%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    // margin: 10,
    marginBottom: 40,
    marginLeft: 0,
    backgroundColor: "#00e3d8",
  },
  locationtext: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default CurrentLocation;
