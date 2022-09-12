import React from "react";
import IonicIcon from 'react-native-vector-icons/Ionicons';

const cameraIcon = () => <IonicIcon name="camera" size={60} color="#00e3d8" />; // Defaults to regular
const SyncIcon = () => <IonicIcon name="sync" size={40} color="white" />; // Defaults to regular
const CloseIcon = () => <IonicIcon name="close" size={40} color="white" />; // Defaults to regular

export default {
    cameraIcon,
    SyncIcon,
    CloseIcon
};