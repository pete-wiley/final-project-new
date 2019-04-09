import React, {Component} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/pages/Home';
import Results from './src/pages/Results';
import Details from './src/pages/Details';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    );
  }
}
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
const MyApp = createAppContainer(MyDrawerNavigator);



