import React, {Component} from 'react'
import { StyleSheet, SafeAreaView, createDrawerNavigator } from 'react-native'
import Home from './src/pages/Home'
import EatResults from './src/pages/EatResults'
import SeeResults from './src/pages/SeeResults'
import DoResults from './src/pages/DoResults'
import DrinkResults from './src/pages/DrinkResults'
import Details from './src/pages/Details'
import Profile from './src/pages/Profile'
import Map from './src/pages/Map'
import { View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <EatResults/>
      </SafeAreaView>
    );
  }
}
// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });
// const MyApp = createAppContainer(MyDrawerNavigator);


