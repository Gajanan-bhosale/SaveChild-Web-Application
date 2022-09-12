import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CameraScreen from "./src/screens/CameraScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImagePreview from "./src/screens/ImagePreview";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
    ImagePreview: ImagePreview,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  },
  {
    initialRouteName: "Camera",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  },
  {
    initialRouteName: "ImagePreview",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
