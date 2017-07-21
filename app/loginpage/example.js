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
import { Button, Container, Header, Content, Title, Footer, Body, Right, Form, Item, Label, Input, Picker } from 'native-base'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class CreateUserProfile extends Component{
  constructor(props) {
   super(props);
   this.state = {
     strainType: 'key1',
     results: {
       items: []
     }
   }
 }
 onValueChange (value: string) {
   this.setState({
     strainType : value
   });
 }
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
                  <Button rounded success><Text style = {styles.buttonText}>+</Text></Button>
                </View>
                <View style={styles.secondPicture}>
                  <ProfilePic style={styles.profilepic} source={require('./BlankAvatar.png')}/>
                  <Button rounded success><Text style = {styles.buttonText}>+</Text></Button>
                </View>
                <View style={styles.thirdPicture}>
                  <ProfilePic style={styles.profilepic} source={require('./BlankAvatar.png')}/>
                  <Button rounded success><Text style = {styles.buttonText}>+</Text></Button>
                </View>
              </View>
              <View style={styles.infoSelectionContainer}>
                  <Form>
                    <Item floatingLabel>
                      <Label>Username</Label>
                      <Input />
                    </Item>
                  </Form>
                <Picker
                 supportedOrientations={['portrait','landscape']}
                 iosHeader="Select one"
                 headerBackButtonText="Go Back"
                 mode="dropdown"
                 selectedValue={this.state.selected}
                 onValueChange={(itemValue, itemIndex) => this.setState({strainType: itemValue})}>
                 <Item label="Indica" value="indica" />
                 <Item label="Hybrid" value="hybrid" />
                 <Item label="Sativa" value="sativa" />
                </Picker>
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
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT,
    backgroundColor:'white'
  },
  pictureSelectionContainer:{
    width:SCREEN_WIDTH,
    height:(SCREEN_HEIGHT)/3,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  firstPicture:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  buttonText:{
    fontSize:20,
  },
  secondPicture:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  thirdPicture:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  infoSelectionContainer:{
    flex:1,
    backgroundColor:'green'
  }

})

AppRegistry.registerComponent('CreateUserProfile', () => CreateUserProfile);
