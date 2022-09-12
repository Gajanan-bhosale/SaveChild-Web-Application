 import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Icons from "../icons";

export default function CameraScreen({ navigation }) {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const onCapture = async () => {
    try{
      if (cameraRef.current) {
        const options = { quality: 0.7, base64: true };
        const image = await cameraRef.current.takePictureAsync(options);
        const source = image.base64;
        if (source) {
          await cameraRef.current.pausePreview();
          navigation.navigate("ImagePreview",{ imageSource: source });
        }
      }
    }catch(error){
      console.log("test", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Camera 
          ref={cameraRef}
          style={styles.camera} 
          type={type}         
          onCameraReady={onCameraReady}
        >
          <View style={styles.camSection}></View>
          <View style={styles.camFooter}>
            <View style={styles.buttonContainer}>
              <View style={{ ...styles.iconWrapper }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Icons.CloseIcon />
                </TouchableOpacity>
              </View>
              <View style={{ width: "60%" }}>
                <View style={{ ...styles.captureWrapper }}>
                  <TouchableOpacity
                    style={styles.capture}
                    disabled={!isCameraReady}
                    onPress={onCapture}
                  ></TouchableOpacity>
                </View>
              </View>
              <View style={{ ...styles.iconWrapper }}>
                <TouchableOpacity
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Icons.SyncIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Camera>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camSection: {
    flex: 5,
    backgroundColor: "transparent",
  },
  camFooter: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    opacity: 0.7,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  captureWrapper: {
    backgroundColor: "white",
    height: 90,
    borderRadius: 90,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    backgroundColor: "#0d0d0d",
    width: "20%",
    height: 70,
    borderRadius: 70,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
});
