import React, {Component} from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home'
import Results from './src/pages/Results'
import Details from './src/pages/Details'
import { View } from 'react-native'



class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home,
    EatResults,
    DoResults,
    SeeResults,
    DrinkResults,
    Details
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft:
          <Icon
            name="bars"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} />
      };
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Map: MapStack,
    Contact: ContactStack,
  },
  {
    contentOptions: {
      inactiveTintColor: 'black',
      activeTintColor: 'rgb(249, 15, 28)'
    }
  }
)

DrawerNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};



const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: DrawerNavigator
  }},
  {
    initialRouteName: "Login"
  },
);



export default createAppContainer(SwitchNavigator);
