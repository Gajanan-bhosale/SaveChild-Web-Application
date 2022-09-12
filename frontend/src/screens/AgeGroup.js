import React, { useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import ImagePreview from "./ImagePreview";

const list = [
  {
    key: "< 4 Years",
    name: "< 4 Years",
  },
  {
    key: "4 to 9 Years",
    name: "4 to 9 Years",
  },
  {
    key: "10 to 14 Years",
    name: "10 to 14 Years",
  },
  {
    key: "> 14 Years",
    name: "> 14 Years",
  },
];

const AgeGroup = ({ ageGroup, setAgeGroup }) => {
  return (
    <View>
      {/* <span><ImagePreview data={ageGroup.data}/></span> */}
      {list.map((item, index) => (
        <CheckBox
          key={item.key}
          title={item.name}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={ageGroup === item.key}
          onPress={() => setAgeGroup(item.key)}
          checkedColor="#00e3d8"
          containerStyle={{
            backgroundColor: "#FFF",
            paddingTop: 2,
            paddingBottom: 2,
            borderWidth: 0,
          }}    
          size={32}
        />
      ))}
    </View>
  );
};

export default AgeGroup;
