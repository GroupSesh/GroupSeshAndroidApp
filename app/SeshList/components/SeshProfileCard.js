import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  AppRegistry
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class SeshProfileCard extends Component{
getPretext(news) {
    if(news.pretext){
        return (
            <Text style={styles.pretext}>{news.pretext}</Text>
        );
    }
}
onPress(news) {
    alert(news.title);
}

  render() {
    const NewsItem = ({ news, index }) => {
        let number = (index + 1).toString();

    }
    return (
      <View style={styles.pageContainer}>
        <View style={styles.news_item}>
          <View style={styles.news_text}>
              <View style={styles.number}>
                  <Text style={styles.title}>{number}.</Text>
              </View>
              <View style={styles.text_container}>
                  { getPretext(news) }
                  <Text style={styles.title}>{news.title}</Text>
                  <Text>{news.summary}</Text>
              </View>
          </View>
          <View style={styles.news_photo}>
              <Image source={news.image} style={styles.photo} />
          </View>
        </View>
      </View>
          );
      }
  }
const styles = StyleSheet.create ({
pageContainer:{
  height:height,
  width:width,
}


})

AppRegistry.registerComponent('SeshProfileCard', () => SeshProfileCard);
