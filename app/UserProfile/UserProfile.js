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
import Icon from 'react-native-vector-icons/FontAwesome'
import ImageSlider from 'react-native-image-slider'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      name: 'Eric Cartmen',
      gender:'M',
      age:'18',
      strainType: 'Indica',
      prefMethod: 'Joints',
      flwrOrCon: 'Flower',
      smokerLevel: 'Daily Smoker',
      smokingActivities: 'Movie',
      bio: 'Respect my athoritahhhh !!!!!',
      friends:'100',
      seshesAttended:'114',
      seshesHosted:'29',
      position: 0,
      interval: null
    }
  }

  render() {
    return (


        <View style={styles.pageContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <TouchableHighlight
              onPress={()=> {console.log('OnPress!');}}
              underlayColor="white"
              activeOpacity={0.7}>
                <Icon name='navicon' size={20} color='white'/>
              </TouchableHighlight>
            </View>
            <Text style={styles.headerText}>User Profile</Text>
            <View style={styles.headerRight}>
              <TouchableHighlight
              onPress={()=> {console.log('OnPress!');}}
              underlayColor="white"
              activeOpacity={0.7}>
                <Icon name='user-plus' size={20} color='white'/>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer} >
            <View style={styles.scrollContent}>
              <View style={styles.pictureContainer}>

                  <ImageSlider
                  images={[
                      require('../Global/Pictures/Cartman.png'),
                      require('../Global/Pictures/BlankAvatar.png'),
                      require('../Global/Pictures/Cartman.png'),
                  ]}
                  name={this.state.name}
                  gender={this.state.gender}
                  age={this.state.age}
                  position={this.state.position}
                  height={Dimensions.get('window').width /3}
                  onPositionChanged={position => this.setState({position})}/>

              </View>
                <View style={styles.middleTabContainer}>
                  <View style={styles.middleTabTextContainer}>
                    <Text style={styles.middleTabValue}>{this.state.seshesAttended}</Text>
                    <Text style={styles.middleTabText}>Seshs attended </Text>
                  </View>
                  <TouchableHighlight
                  onPress={()=> {console.log('OnPress!');}}
                  underlayColor="white"
                  activeOpacity={0.7}>
                    <View style={styles.middleTabMiddleTextContainer}>
                      <View style={styles.middleTabMiddleTextBorder}>
                        <Text style={styles.middleTabValue}>{this.state.friends} </Text>
                        <Text style={styles.middleTabText}>Friends </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <View style={styles.middleTabTextContainer}>
                    <Text style={styles.middleTabValue}>{this.state.seshesHosted}</Text>
                    <Text style={styles.middleTabText}>Seshs Hosted </Text>
                  </View>
                </View>
              <View style={styles.infoSelectionContainer}>
                <Text style={styles.labelText}>Flower or Concentrates: </Text>
                <Text style={styles.valueText}>{this.state.flwrOrCon}</Text>

                <Text style={styles.labelText}>Prefered Strain Type: </Text>
                <Text style={styles.valueText}>{this.state.prefMethod}</Text>

                <Text style={styles.labelText}>Favorite Method of Smoking: </Text>
                <Text style={styles.valueText}>{this.state.strainType}</Text>

                <Text style={styles.labelText}>Smoker Level: </Text>
                <Text style={styles.valueText}>{this.state.smokerLevel}</Text>

                <Text style={styles.labelText}>Favorite Activities While Smoking: </Text>
                <Text style={styles.valueText}>{this.state.smokingActivities}</Text>

                <Text style={styles.labelText}>Bio: </Text>
                <Text style={styles.valueText}>{this.state.bio}</Text>

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
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'lightgreen'
  },
  headerText:{
    fontSize:20,
    color:'white'
  },
  headerLeft:{
    paddingHorizontal:screenWidth/20
  },
  headerRight:{
    paddingHorizontal:screenWidth/20
  },
  contentContainer:{
    paddingBottom:screenHeight/6,

  },
  scrollContent:{
      width:screenWidth,
      height:screenHeight-(screenHeight/12),
  },
  pictureContainer:{
    paddingVertical:screenHeight/100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  middleTabContainer:{
    height:screenHeight/12,
    width:screenWidth,
    backgroundColor:'lightgreen',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  middleTabTextContainer:{
    width:screenWidth/3,
    alignItems:'center',
    justifyContent:'center'
  },
  middleTabMiddleTextContainer:{
    width:screenWidth/3,
    borderLeftColor:'white',
    borderRightColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
    middleTabMiddleTextBorder:{
    width:screenWidth/3,
    height:screenHeight/15,
    borderLeftColor:'white',
    borderLeftWidth:1,
    borderRightColor:'white',
    borderRightWidth:1,
    alignItems:'center',
    justifyContent:'center',
  },
  middleTabValue:{
    color:'white',
      fontSize:20,
      alignItems:'center',
      justifyContent:'center'
  },
  middleTabText:{
    color:'white',
    fontSize:14,
    paddingBottom:10,
    justifyContent:'center',
  },
  infoSelectionContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  labelText:{
    fontSize:16,
    color:'lightgreen',
    paddingVertical:8,
    alignItems:'center'
  },
  valueText:{
    fontSize:16,
  },

})

AppRegistry.registerComponent('UserProfile', () => UserProfile);
