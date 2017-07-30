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
import ImageSliderSesh from 'react-native-image-slider-sesh'
import seshPic from '../Global/Pictures/Snoop.jpg'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SeshProfile extends Component{
  constructor(props){
    super(props);
    this.state={
      seshName: 'Sesh101',
      seshPic: seshPic,
      startTime: '10:30 PM',
      maxSmokers: '10',
      pubOrApprov: 'N/A',
      prefMethod: 'N/A',
      flwrOrCon: 'N/A',
      smokerLevel: 'N/A',
      smokingActivities: 'N/A',
      bio: 'N/A',
      attendants:[ { name:'Eric Cartmen', age:'18', gender:'M', role:'Host', image:require('../Global/Pictures/Cartman.png')},
                   { name:'Stan Marsh', age:'18', gender:'M', role:'Attendant', image:require('../Global/Pictures/Stan.jpg')},
                   { name:'Kyle Broflovsky', age:'18', gender:'M', role:'Attendant', image:require('../Global/Pictures/Kyle.jpg')},
                   { name:'Kenny McCormick', age: '18', gender:'M', role:'Attendant', image:require('../Global/Pictures/Kenny.png')}
                  ],

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
            <Text style={styles.headerText}>Sesh Profile</Text>
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

                  <ImageSliderSesh
                  attendants={this.state.attendants}
                  seshName={this.state.seshName}
                  seshPic={this.state.seshPic}
                  position={this.state.position}
                  height={Dimensions.get('window').width /3}
                  onPositionChanged={position => this.setState({position})}/>

              </View>
                <View style={styles.middleTabContainer}>
                  <View style={styles.middleTabTextContainer}>
                    <Text style={styles.middleTabValue}>{this.state.attendants.length}</Text>
                    <Text style={styles.middleTabText}>Number of Smokers </Text>
                  </View>
                  <TouchableHighlight
                  onPress={()=> {console.log('OnPress!');}}
                  underlayColor="white"
                  activeOpacity={0.7}>
                    <View style={styles.middleTabMiddleTextContainer}>
                      <View style={styles.middleTabMiddleTextBorder}>
                        <Text style={styles.middleTabValue}>{this.state.startTime} </Text>
                        <Text style={styles.middleTabText}>Start Time </Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <View style={styles.middleTabTextContainer}>
                    <Text style={styles.middleTabValue}>{this.state.maxSmokers}</Text>
                    <Text style={styles.middleTabText}>Max Smokers </Text>
                  </View>
                </View>
              <View style={styles.infoSelectionContainer}>
                <Text style={styles.labelText}>bio: </Text>
                <Text style={styles.valueText}>{this.state.bio}</Text>

                <Text style={styles.labelText}>Prefered Methos: </Text>
                <Text style={styles.valueText}>{this.state.prefMethod}</Text>

                <Text style={styles.labelText}>Smoking Activities: </Text>
                <Text style={styles.valueText}>{this.state.smokingActivities}</Text>

                <Text style={styles.labelText}>Location: </Text>
                <Text style={styles.valueText}>{this.state.pubOrApprov}</Text>

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

AppRegistry.registerComponent('SeshProfile', () => SeshProfile);
