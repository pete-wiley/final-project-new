import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-elements'
import MapView from 'react-native-maps'
import { Image } from 'react-native'
import Gem from '../assets/pics/gemIcon.png'

export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: null,
      title: "Map",
      headerTitleStyle: { fontSize: 25 },
      headerRight:
      <Image
      source={Gem}
      style={{width: 50, height: 50, paddingRight: 200}}
      resizeMode={"contain"}
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

