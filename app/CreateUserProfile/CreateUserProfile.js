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
import ProfilePic from './ProfilePictureSetup'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class CreateUserProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      strainType: 'N/A',
      prefMethod: 'N/A',
      flwrOrCon: 'N/A',
      smokerLevel: 'N/A',
      smokingActivities: 'N/A',
      bio: 'N/A'
    }
  }
  render() {
    return (


        <View style={styles.pageContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Create User Profile</Text>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.scrollContent}>
              <View style={styles.pictureSelectionContainer}>

                <TouchableHighlight
                onPress={()=> {console.log('OnPress!');}}
                underlayColor="white"
                activeOpacity={0.7}>

                  <View style={styles.firstPicture}>
                    <ProfilePic style={styles.profilepic} source={require('../Global/Pictures/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
              onPress={()=> {console.log('OnPress!');}}
              underlayColor="white"
              activeOpacity={0.7}>
                <View style={styles.secondPicture}>
                  <ProfilePic style={styles.profilepic} source={require('../Global/Pictures/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
              onPress={()=> {console.log('OnPress!');}}
              underlayColor="white"
              activeOpacity={0.7}>
                <View style={styles.thirdPicture}>
                  <ProfilePic style={styles.profilepic} source={require('../Global/Pictures/BlankAvatar.png')}/>
                </View>
              </TouchableHighlight>
              </View>
              <View style={styles.infoSelectionContainer}>
                <Text style={styles.labelText}>Flower or Concentrates:</Text>
                <Picker
                  selectedValue={this.state.flwrOrCon}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) => this.setState({flwrOrCon:itemValue})}>
                  <Picker.Item label="Flower" value="flwr" />
                  <Picker.Item label="Concentrates" value="conc" />
                  <Picker.Item label="Both" value="both" />
                </Picker>
                <Text style={styles.labelText}>Prefered Strain Type:</Text>
                <Picker
                  selectedValue={this.state.prefMethod}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) => this.setState({prefMethod:itemValue})}>
                  <Picker.Item label="Sative" value="sat" />
                  <Picker.Item label="Hybrid" value="hyb" />
                  <Picker.Item label="Indica" value="ind" />
                  <Picker.Item label="No Preference" value="nop" />
                </Picker>
                <Text style={styles.labelText}>Favorite Method of Smoking:</Text>
                <Picker
                  selectedValue={this.state.strainType}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) => this.setState({strainType:itemValue})}>
                  <Picker.Item label="Joints" value="sat" />
                  <Picker.Item label="Bongs" value="hyb" />
                  <Picker.Item label="Vapes" value="ind" />
                  <Picker.Item label="Dabs" value="sat" />
                  <Picker.Item label="Pipe" value="hyb" />
                  <Picker.Item label="One Hitter" value="ind" />
                  <Picker.Item label="Anything and Everything" value="any" />
                </Picker>
                <Text style={styles.labelText}>Smoker Level:</Text>
                <Picker
                  selectedValue={this.state.smokerLevel}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) => this.setState({smokerLevel:itemValue})}>
                  <Picker.Item label="Beginner(<1 time a month)" value="beg" />
                  <Picker.Item label="Intermediate" value="int" />
                  <Picker.Item label="Daily Smoker(>1 time a day)" value="ind" />
                </Picker>
                <Text style={styles.labelText}>Favorite Activities While Smoking:</Text>
                <Picker
                  selectedValue={this.state.smokingActivities}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) => this.setState({smokingActivities:itemValue})}>
                  <Picker.Item label="Listen to Music" value="mus" />
                  <Picker.Item label="Movie" value="mov" />
                  <Picker.Item label="Hiking" value="hik" />
                  <Picker.Item label="Running" value="run" />
                  <Picker.Item label="Swimming" value="swm" />
                  <Picker.Item label="Basketball" value="bbl" />
                </Picker>
                <Text style={styles.labelText}>Bio:</Text>
                <TextInput
                placeholder="Enter Text"
                maxLength= {200}
                onChangeText={(bio) => this.setState({bio})}
                />
                <View style={styles.submitButtonContainer}>
                  <TouchableHighlight
                  onPress={()=> {console.log('OnPress!');}}
                  underlayColor="white"
                  activeOpacity={0.7}>
                  <View style={styles.submitButton}>
                  <Text style = {styles.submitButtonText}>Submit.</Text>
                  </View>
                  </TouchableHighlight>
                </View>
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
    paddingBottom:50
  },
  scrollContent:{
      width:screenWidth,
      height:screenHeight-(screenHeight/12),
  },
  pictureSelectionContainer:{
    width:screenWidth,
    height:(screenHeight)/4,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:10
  },
  firstPicture:{
    borderRadius:(screenWidth)/4,
    alignItems:'center',
  },
  secondPicture:{
    borderRadius:(screenWidth)/4,
    alignItems:'center',
  },
  thirdPicture:{
    borderRadius:(screenWidth)/4,
    alignItems:'center',
  },
  infoSelectionContainer:{
    flexDirection:'column',
  },
  labelText:{
    fontSize:16,
    color:'green'
  },
  submitButtonContainer:{
    flexDirection:'column',
    alignItems:'center'
  },
  submitButton:{
    width:110,
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
  }

})

AppRegistry.registerComponent('CreateUserProfile', () => CreateUserProfile);
