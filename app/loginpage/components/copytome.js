import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';
import ProfilePic from './ProfilePictureSetup'
import { Container, Header, Title, Body, Content,  } from 'native-base'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class CreateUserProfile extends Component{
  render() {
    return (
      <Container>

        <Header>
          <View style={styles.headerContainer}>
            <Body>
              <Title>Create Profile</Title>
            </Body>
          </View>
        </Header>

        <Content>

        <View style={styles.pageContainer}>
          <View style={styles.pictureSelectionContainer}>
            <View style={styles.firstPicture}>
              <ProfilePic style={styles.profilepic} source={require('./BlankAvatar.png')}/>
            </View>
            <View style={styles.secondPicture}>
              <ProfilePic style={styles.profilepic} source={require('./BlankAvatar.png')}/>
            </View>
            <View style={styles.thirdPicture}>
              <ProfilePic style={styles.profilepic} source={require('./BlankAvatar.png')}/>
            </View>
          </View>
          <View style={styles.infoSelectionContainer}>
          </View>
        </View>

        </Content>


      </Container>

    );
  }
}
const styles = StyleSheet.create ({
  headerContainer:{
    justifyContent:'center',
    marginTop:5
  },
  pageContainer:{
    backgroundColor:'red'
  },
  pictureSelectionContainer:{
    width:SCREEN_WIDTH,
    height:(SCREEN_HEIGHT)/3,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'grey'
  },
  firstPicture:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green'
  },
  secondPicture:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green'
  },
  thirdPicture:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'green'
  },
  infoSelectionContainer:{
    backgroundColor:'green'
  }

})

AppRegistry.registerComponent('CreateUserProfile', () => CreateUserProfile);
