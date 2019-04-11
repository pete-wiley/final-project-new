import React, { Component } from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';

import MapView from 'react-native-maps'

export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerBackTitle: null,
        headerLeft:
                <Icon
                    name="bars"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()} />,
        title: "Map"
    }
}
  render() {
    return (
      <MapView
        style={{flex: 1}}
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

