import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';


import Button from './Button';
const SeshProfileCard = ({ news, index }) => {
    let number = (index + 1).toString();

    return (
        ...
    );
}
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class SeshProfileCard extends Component{
  function getPretext(news) {
    if(news.pretext){
        return (
            <Text style={styles.pretext}>{news.pretext}</Text>
        );
    }
},
function onPress(news) {
    alert(news.title);
}
  render() {
    return (
      <View style={styles.pageContainer}>
        <Button
            key={index}
            noDefaultStyles={true}
            onPress={onPress.bind(this, news)}
        >
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
        </Button>
      </View>
          );
      }
    );
  }
const styles = StyleSheet.create ({
pageContainer{
  height:screenHeight,
  width:screenWidth,
}


})

AppRegistry.registerComponent('SeshProfileCard', () => SeshProfileCard);
