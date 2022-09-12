import React from "react";
import { View, ImageBackground, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Divider, Chip, Text } from "react-native-elements";

import Images from "../image";
import Icons from "../icons";

const ChipIcons = {
  food:{
    name: "food-apple",
    type: "material-community",
    size: 20,
    color: 'white',
  },
  education:{
    name: "school",
    type: "material-icon",
    size: 20,
    color: 'white',
  },
  shelter:{
    name: "home",
    type: "font-awesome",
    size: 20,
    color: 'white',
  },
};

const HomeScreen = ({ navigation }) => {
  onCameraClick = () => {
    navigation.navigate("Camera");
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={Images.homeImage} resizeMode="cover" style={styles.image} imageStyle={styles.imageStyle}>
          <TouchableOpacity style={styles.button} onPress={onCameraClick}>
            <Icons.cameraIcon />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
          <View style={{flex:4}}>
            <Text style={{fontSize: 22, textAlign: "justify"}} >Let's help tracking homeless kids, Your contributing effort will enlighten their future! 
            </Text>
            <Text style={{fontSize: 22, marginTop: 15}}>
              <Text style={styles.link} onPress={() => Alert.alert("Upload Picture")}> Upload</Text> pictures with location.
            </Text>

            <Text style={{fontSize: 20, marginTop: 15}}>
              Our mission is to fulfill there basic needs
            </Text>
            <View style={{display: "flex", flexDirection: "row", marginTop:15}}>
              <Chip
                  title="Food"
                  icon={ChipIcons.food}
                  buttonStyle={{backgroundColor:"#70c267"}}
                  titleStyle={{fontSize:16}}
              />
              <Divider orientation="vertical" color="#FFF" style={{marginLeft:10, marginRight: 10}}/>
              <Chip
                  title="Shelter"
                  icon={ChipIcons.shelter}
                  buttonStyle={{backgroundColor:"#001e78"}}
                  titleStyle={{fontSize:16}}
              />
              <Divider orientation="vertical" color="#FFF" style={{marginLeft:10, marginRight: 10}}/>
              <Chip
                  title="Education"
                  icon={ChipIcons.education}
                  buttonStyle={{backgroundColor:"#e0731f"}}
                  titleStyle={{fontSize:16}}
              />
            </View>
          </View>
          <View style={{flex:1}}>
            <Divider orientation="horizontal" style={{marginBottom:20, marginTop:20}} />
            <Text h5 >Want to know how it works? Visit 
              <Text style={styles.link} onPress={() => Alert.alert("Upload Picture")}> Our Execution Plan</Text>
            </Text>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFF",
  },
  textContainer: {
    backgroundColor:"#FFF",
    height: "45%",
    flexDirection:"column",
    padding:"5%"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    shadowColor: "#949494",
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity: 0.3
  },
  imageStyle: {
    borderBottomWidth: 2,
    borderColor:"#4cf5ec",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  button: {
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 125,
    borderRadius: 125,
    backgroundColor: "white",
    borderColor:"#4cf5ec",
    borderWidth: 2,
    shadowColor: "#949494",
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity: 0.3
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  link:{
    color: "#4cf5ec", 
    fontWeight: "bold",
  },
  textContent:{
    fontSize: 20,
  }
});

export default HomeScreen;
