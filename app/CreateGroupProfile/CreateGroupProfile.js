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
export default class CreateGroupProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      pubOrApprov: 'N/A',
      prefMethod: 'N/A',
      flwrOrCon: 'N/A',
      smokerLevel: 'N/A',
      smokingActivities: 'N/A',
      bio: 'N/A'
    }
  }
  state = {
    isDateTimePickerVisible: false,
   initialPosition: 'unknown',
   lastPosition: 'unknown',
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this._hideDateTimePicker();
    };


  render() {
    return (
        <View style={styles.pageContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create Sesh Profile</Text>
          </View>

          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.seshPictureSelectionContainer}>

              <TouchableHighlight
              onPress={()=> {console.log('OnPress!');}}
              underlayColor="white"
              activeOpacity={0.7}>

                <View style={styles.seshPicture}>
                  <SeshPic style={styles.seshPic} source={require('../CreateUserProfile/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.profilePicturesContainer}>
              <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.7}>
                <View style={styles.hostPicture}>
                  <HostPic style={styles.hostPic} source={require('../CreateUserProfile/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.7}>
                <View style={styles.attendentPicture}>
                  <AttendentPic style={styles.attendentPic} source={require('../CreateUserProfile/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.7}>
                <View style={styles.attendentPicture}>
                  <AttendentPic style={styles.attendentPic} source={require('../CreateUserProfile/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.7}>
                <View style={styles.attendentPicture}>
                  <AttendentPic style={styles.attendentPic} source={require('../CreateUserProfile/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.infoSelectionContainer}>
              <Text style={styles.labelText}>Sesh Memo:</Text>
              <TextInput
              placeholder="Enter Text"
              maxLength= {200}
              onChangeText={(bio) => this.setState({bio})}
              />
              <Text style={styles.labelText}>Location of Sesh:</Text>
              <Picker
                selectedValue={this.state.pubOrApprov}
                mode={'dialog'}
                onValueChange={(itemValue, itemIndex) => this.setState({pubOrApprov:itemValue})}>
                <Picker.Item label="Approval Required" value="aprq" />
                <Picker.Item label="Public (Visible by Anyone)" value="pub" />
              </Picker>
              <View style={styles.labelTextContainer}>
                <Text style={styles.labelText}>Approx Start Time of Sesh:</Text>
              </View>
              <View style={styles.startPicker}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <Text>Start Time</Text>
                </TouchableOpacity>
                <DateTimePicker
                  mode={'datetime'}
                  is24Hour={false}
                  datePickerModeAndroid={'spinner'}
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
              </View>
              <Text style={styles.labelText}>Aprrox Length of Sesh:</Text>
              <Picker
                selectedValue={this.state.lengthSesh}
                mode={'dialog'}
                onValueChange={(itemValue, itemIndex) => this.setState({lengthSesh:itemValue})}>
                <Picker.Item label="1 Hour" value="1h" />
                <Picker.Item label="2 Hour" value="2h" />
                <Picker.Item label="3 Hour" value="3h" />
                <Picker.Item label="4 Hour" value="4h" />
                <Picker.Item label="5 Hour" value="5h" />
                <Picker.Item label="6 Hour" value="6h" />
                <Picker.Item label="7 Hour" value="7h" />
                <Picker.Item label="8 Hour" value="8h" />
                <Picker.Item label="9 Hour" value="9h" />
                <Picker.Item label="10 Hour" value="10h" />
              </Picker>
              <View style={styles.submitButtonContainer}>
              <MapView
                style={styles.map}
                initialRegion={SAMPLE_REGION}
              />
              </View>
              <View style={styles.submitButtonContainer}>
                <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.8}>
                  <View style={styles.submitButton}>
                  <Text style = {styles.submitButtonText}>Create Sesh!</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

        </ScrollView>
      </View>

    );
  }
}
const styles = StyleSheet.create ({

  pageContainer:{
      width:screenWidth,
      height:screenHeight,
    backgroundColor:'white'
  },
  headerContainer:{
    width:screenWidth,
    height:screenHeight/12,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgreen'
  },
  headerText:{
    fontSize:20,
    color:'white'
  },
  contentContainer:{
    paddingBottom:35,
    paddingTop:10,
   paddingHorizontal:10
  },
  pictureSelectionContainer:{
    width:screenWidth,
    height:(screenHeight)/2,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:10
  },
  seshPicture:{
    borderRadius:(screenWidth)/4,
    alignItems:'center',
  },
  profilePicturesContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    paddingBottom:10
  },

  infoSelectionContainer:{
    flexDirection:'column',
  },
  labelText:{
    fontSize:16,
    color:'green'
  },
  labelTextContainer:{
    paddingBottom:10
  },
  startPicker:{
    paddingBottom:10,
    justifyContent:'space-between',
  },
  mapContainer:{
    height: screenHeight/3,
      width: screenWidth-20,
      marginVertical: 10,
      paddingHorizontal:10
  },

  map:{
    height: screenHeight/3,
    width: screenWidth-20,
    marginVertical: 10,
    paddingHorizontal:10,
  },
  submitButtonContainer:{
    flexDirection:'column',
    alignItems:'center',
    paddingTop:10
  },
  submitButton:{
    width:150,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"lightgreen",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:20,
    borderColor:"white",
  },
  submitButtonText:{
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  },
})

AppRegistry.registerComponent('CreateGroupProfile', () => CreateGroupProfile);
