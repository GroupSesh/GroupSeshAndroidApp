import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Picker,
  ScrollView

} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker'
import SeshPic from './SeshPictureSetup'
import HostPic from './SeshHostPicSetup'
import AttendentPic from './SeshAttendentPicSetup'
import MapView from 'react-native-maps'
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SAMPLE_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height:screenHeight,
    width:screenWidth,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default class CreateSeshProfile extends Component{
  render() {
    return (
        <View style={styles.container}>
        <MapView
          style={ styles.map }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

    );
  }
}


AppRegistry.registerComponent('CreateUserProfile', () => CreateUserProfile);
