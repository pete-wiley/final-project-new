import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems
} from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home'
import EatResults from './src/pages/EatResults'
import SeeResults from './src/pages/SeeResults'
import DoResults from './src/pages/DoResults'
import DrinkResults from './src/pages/DrinkResults'
import Details from './src/pages/Details'
import Profile from './src/pages/Profile'
// import Map from './src/pages/Map'



const ProfileStack = createStackNavigator(
  {
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft:
          <Icon
            name="bars"
            size={30}
            tyle={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} />
      };
    }
  }
)

// const MapStack = createStackNavigator(
//   {
//     Map
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft:
//         <Icon
//           name="bars"
//           size={30}
//           tyle={{ paddingLeft: 10 }}
//           onPress={() => navigation.openDrawer()} />
//       };
//     }
//   }
// )

const HomeStack = createStackNavigator(
  {
    Home,
    EatResults,
    // DoResults,
    // SeeResults,
    // DrinkResults,
    // Details
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
    // Map: MapStack,
    // Contact: ContactStack,
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



// const SwitchNavigator = createSwitchNavigator(
//   {
//     Home: {
//       screen: DrawerNavigator
//   }},
//   {
//     initialRouteName: "Home"
//   },
// );



export default createAppContainer(SwitchNavigator);
