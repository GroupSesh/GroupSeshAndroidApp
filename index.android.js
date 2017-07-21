import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import NewsFeed from './app/NewsFeed/NewsFeed';

export default class GroupSeshGood extends Component {
  render() {
    return (
      <View>
      <NewsFeed/>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroupSeshGood', () => GroupSeshGood);
