import React, { useState } from "react";
import * as _ from "lodash";
import { View, Image, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-elements";
import Images from "../image";
import AgeGroup from "./AgeGroup";  7276886593
import CurrentLocation from "./CurrentLocation";
import axios from "axios";

const GENDER_MAP = [
  {
    id: "FEMALE",
    value: "FEMALE",
    icon: Images.girlIcon,
  },
  // class Person(models.Model):
  // unique_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

  // class Person(models.Model):
  // id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

   
  {
    id: "MALE",
    value: "MALE",
    icon: Images.boyIcon,
  },
];

const ImagePreview = ({ navigation }) => {
  const sourceImage = `data:image/png;base64,${navigation.state.params.imageSource}`;
  const [selectedGender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [locations, setLocation] = useState('');


  const changeGender = (value) => {
    setGender(value);
  };

  const getGenderRenderer = () => {
    return _.map(GENDER_MAP, (eachGender) => (
      <View key={eachGender.id} style={styles.genderWrapper}>  
        <Avatar
          rounded
          size="medium"
          source={eachGender.icon}
          containerStyle={
            _.isEqual(selectedGender, eachGender.id)
              ? styles.selectedGender
              : styles.gender
          }
          onPress={() => changeGender(eachGender.id)}
        />
      </View>
    ));
  };

  const uploadData = () => {
    console.log({
      // image: sourceImage,
      gender: selectedGender,
      age: ageGroup,
      location: locations,
    })
    try {
      axios
        .post("http://127.0.0.1:8000/api/info/", {
          image: sourceImage,
          gender: selectedGender,
          age: ageGroup,
          location: locations,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log("Test", error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 4 }}>
        <Card containerStyle={{ height: 200, width: 200, alignSelf: "center" }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{ uri: sourceImage }}
          />
        </Card>
      </View>
      <View style={{ flex: 8, padding: 1 }}>
        <View style={{ flex: 2, marginBottom: 20 }}>
          <Text style={styles.label}>Select Gender</Text>
          <View style={styles.genderContainer}>{getGenderRenderer()}</View>
        </View>
        <View style={{ flex: 7 }}>
          <Text style={styles.label}>Select Age Group</Text>

          <AgeGroup ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
        </View>
        <View style={{ flex: 1 }}><CurrentLocation locations={locations} setLocation={setLocation} /></View>

        <View>
          <Button
            title="Upload"
            buttonStyle={styles.uploadButton}
            titleStyle={styles.uploadButtonTitle}
            onPress={() => uploadData()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    alignSelf: "center",
    marginBottom: 5,
  },
  genderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 1,
  },
  genderWrapper: {
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  gender: {
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#c7c7c7",
  },
  selectedGender: {
    padding: 10,
    width: 65,
    height: 65,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#00e3d8",
  },
  uploadButton: {
    backgroundColor: "#00e3d8",
    borderRadius: 25,
    width: "70%",
    marginBottom: 20,
    marginHorizontal: 50,
  },
  uploadButtonTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ImagePreview;
