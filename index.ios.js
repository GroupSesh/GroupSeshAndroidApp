import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Loginpage extends Component{
  render() {
    return (
      <View>
      <Text>GroupSesh</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Loginpage', () => Loginpage);
