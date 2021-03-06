import React, { Component, PropTypes } from 'react';
import SeshCards from './components/TestFile.json';

import {
 	AppRegistry,
	View,
	Text,
	Image,
	ListView,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon } from 'native-base';

import ProgressBar from '../Global/ProgressBar';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


class SeshList extends Component {

  constructor(props) {
				super(props);
				const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
				this.state = {
					isLoading: true,
					dataSource: ds.cloneWithRows(SeshCards),
		      showLoader:true
				}
		}

   componentDidMount(){
					var self = this;
					setTimeout(function () {
						self.setState({ isLoading: false });
					}, 1);
				}

  renderCards(stories) {
						return (
							<Card>
								<CardItem>
									<Left style={{flex:0.8}}>
										<Icon name="ios-book" />
										<Body>
											<Text style={{fontWeight:'bold',fontSize:17}}>{stories.title}</Text>
											<Text note style={{fontSize:15}}>{stories.topicName}</Text>
										</Body>
									</Left>
									<Right style={{flex:0.2}}>
										<Icon name="ios-heart"/>
									</Right>
								</CardItem>
								<CardItem cardBody>

								</CardItem>
								<CardItem content>
									<Text>{stories.story}</Text>
								</CardItem>
							</Card>
						)
					}

	renderLoader(){
				return (
					this.state.showLoader?<View><Spinner color='red' /></View>:null
				)
			}

hideLoader(){
				setTimeout(() => {
					this.setState({showLoader:false})
				}, 1);
			}

render(){
		  return (
		     this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
		       <View style={styles.listContainer}>
		         <SGListView
		           dataSource={this.state.dataSource}
		           renderRow={this.renderCards}
		           pageSize={10}
		           stickyHeaderIndices={[]}
		           onEndReachedThreshold={1}
		           initialListSize={10}
		           renderFooter={(event)=>this.renderLoader(event)}
		           scrollRenderAheadDistance={4}
		           onEndReached={(event)=>this.hideLoader(event)}
		         />
		       </View>
		   );
			}
		}

AppRegistry.registerComponent('SeshList', () => SeshList);
