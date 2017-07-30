import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import CreateGroupProfile from './app/CreateSeshProfile/CreateSeshProfile';

export default class pleasework extends Component {
  render() {
    return (
      <View>
      <CreateSeshProfile/>
      </View>
    );
  }
}

AppRegistry.registerComponent('pleasework', () => pleasework);
