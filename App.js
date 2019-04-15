import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';

import Home from './src/pages/Home'
import EatResults from './src/pages/EatResults'
import SeeResults from './src/pages/SeeResults'
import DoResults from './src/pages/DoResults'
import DrinkResults from './src/pages/DrinkResults'
import Details from './src/pages/Details'
import Profile from './src/pages/Profile'
import Map from './src/pages/Map'



const ProfileStack = createStackNavigator(
  {
    Profile:{
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="bars"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} 
            />
        };
    }
  },
}
)
  

const MapStack = createStackNavigator(
  {
    Map:{
      screen: Map,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="bars"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()} 
            />
        };
    }
  },
  }
)



const HomeStack = createStackNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="bars"
            size={30}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            />
        }
      }
    },
    EatResults:{
      screen: EatResults,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="arrow-left"
            size={30}
            style={{ paddingLeft: 10}}
            onPress={() => navigation.navigate('Home')} />
        }
      }
    },
    DoResults:{
      screen: DoResults,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="arrow-left"
            size={30}
            style={{ paddingLeft: 10}}
            onPress={() => navigation.navigate('Home')} />
        }
      }
    },
    SeeResults:{
      screen: SeeResults,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="arrow-left"
            size={30}
            style={{ paddingLeft: 10}}
            onPress={() => navigation.navigate('Home')} />
        }
      }
    },
    DrinkResults:{
      screen: DrinkResults,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft:
          <Icon
            name="arrow-left"
            size={30}
            style={{ paddingLeft: 10}}
            onPress={() => navigation.navigate('Home')} />
        }
      }
    },
    Details:{
      screen: Details,
      navigationOptions: ({ navigation }) => {
        return {
          headerBackTitle: null,
          headerBackImage:(
            <Icon
              name="arrow-left"
              size={30}
              style={{ paddingLeft: 10}} />
          )
        }
      }
    }
  },
)
const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Map: MapStack,
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




export default createAppContainer(DrawerNavigator);
