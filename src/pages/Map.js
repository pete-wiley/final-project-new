import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-elements'
import MapView from 'react-native-maps'
import Gem from '../assets/pics/gemIcon.png'

export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: null,
      title: "Map",
      headerTitleStyle: { fontSize: 25 },
      headerRight:
        <Rating
          style={{ paddingRight: 110 }}
          type='custom'
          ratingImage={Gem}
          ratingCount='1'
          ratingColor=''
          imageSize={40}
          onFinishRating={this.ratingCompleted}
        />
    }
  }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 33.5186,
          longitude: -86.8104,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
    );
  }
}

