import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import SeshProfileCard from './components/SeshProfileCard';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class NewsFeed extends Component{
  renderNews() {
    return this.state.sesh_card.map((news, index) => {
        return <SeshProfileCard key={index} index={index} news={news} />
    });
}
  constructor(props) {
        super(props);
          this.state = {
          sesh_card: [
                      {
                          pretext: 'Gray Matter',
                          title: 'Art Makes You Smart',
                          summary: 'Museum visits increase test scores, generate social responsibility and increase appreciation of the arts by students.',
                          image: require('../CreateUserProfile/BlankAvatar.png')
                      },
                      {
                          pretext: '',
                          title: 'Tension and Flaws Before Health Website Crash',
                          summary: 'Interviews and documents offer new details into how the rollout of President Obama\'s signature program turned into a major humiliation.',
                          image: require('../CreateUserProfile/BlankAvatar.png')
                      },
                      {
                          pretext: '',
                          title: '36 Hours in Charleston, S.C.',
                          summary: 'Crowds are thinner and temperatures are mild during winter in this..',
                          image: require('../CreateUserProfile/BlankAvatar.png')
                      },

                  ]
              };
          }
  render() {
    return (
      <View style={styles.pageContainer}>
                  <View style={styles.header}>
                      <View style={styles.header_text}>
                          <Text style={styles.header_text_label}>Most E-Mailed</Text>
                      </View>
                      <View style={styles.whitespace}></View>
                  </View>

                  <View style={styles.instruction}>
                      <Text style={styles.instruction_text}>SWIPE ACROSS SECTIONS</Text>
                  </View>

                  <ScrollView style={styles.news_container}>
                  { this.renderNews() }
                  </ScrollView>

              </View>
          );
      }
    }

const styles = StyleSheet.create ({
pageContainer:{
  height:screenHeight,
  width:screenWidth,
}


})

AppRegistry.registerComponent('NewsFeed', () => NewsFeed);
