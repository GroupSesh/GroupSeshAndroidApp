import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Banner from './components/bannersetup'
import Logo from './components/logosetup'

export default class Loginpage extends Component{
  render() {
    return (
      <View style={styles.LoginPageContainer}>
          <View style={styles.BannerContainer}>
            <Banner
            source = {require('../../picture/banner.png')}
            origonalBannerWidth={411}
            origonalBannerHeight={120}
            />
          </View>
          <View style={styles.LogoContainer}>
            <Logo
            source = {require('../../picture/logo.png')}
            origonalLogoWidth={425}
            origonalLogoHeight={490}
            />
          </View>
          <View style = {styles.RegisterContainer}>
            <Text style = {styles.PleaseEnterText}>Please enter your phone number to register.</Text>
            <View style = {styles.NumberInput}>
              <TextInput
                placeholder="--- --- -----"
                style={styles.Input}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.RegisterButton}>
            <TouchableHighlight
            onPress={()=> {console.log('OnPress!');}}
            underlayColor="white"
            activeOpacity={0.7}>
              <Text style = {styles.RegisterButtonText}>submit.</Text>
            </TouchableHighlight>
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  LoginPageContainer:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  BannerContainer:{
    flex:1
  },
  LogoContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  RegisterContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  PleaseEnterText:{
    fontSize:16,
    color:'grey'
  },
  NumberInput:{
    flexDirection:'row',
    marginVertical:10,
    backgroundColor:'transparent',

  },
  Input:{
    justifyContent:'center',
    flex:1,
    paddingHorizontal:10,
    backgroundColor:'white',
    fontSize:16
  },
  RegisterButton:{
    width:110,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"green",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:20,
    borderColor:"green",
  },
  RegisterButtonText:{
    fontSize:20,
    fontWeight:"bold",
    color:"white"
  }

})

AppRegistry.registerComponent('Loginpage', () => Loginpage);
