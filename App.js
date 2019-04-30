import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './src/pages/Home'
import EatResults from './src/pages/EatResults'
import SeeResults from './src/pages/SeeResults'
import DoResults from './src/pages/DoResults'
import DrinkResults from './src/pages/DrinkResults'
import Details from './src/pages/Details'
import Profile from './src/pages/Profile'
import Map from './src/pages/Map'
import Favorites from './src/pages/Favorites'
import Playlists from './src/pages/Playlists'
import MenuDrawer from './src/component/MenuDrawer';
import SplashScreen from './src/pages/Splash'

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
  
const FavoritesStack = createStackNavigator(
  {
    Favorite:{
      screen: Favorites,
      navigationOptions: ({ navigation }) => {
        return{
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
  }
)
const PlaylistStack = createStackNavigator(
  {
    Playlists:{
      screen: Playlists,
      navigationOptions: ({ navigation }) => {
        return{
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
        }
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
            />,
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

const DrawerConfig = {
  drawerWidth: 300,
  contentOptions:{
    activeTintColor: 'orange'
  },
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator = createDrawerNavigator(
  {
    SplashScreen,
    Home:{
      screen:HomeStack
    }, 
    Profile:{
      screen:ProfileStack
    },
    Map:{
      screen: MapStack
    },
    Favorites:{
      screen: FavoritesStack
    },
    Playlists:{
      screen: PlaylistStack
    }, 
  },
  DrawerConfig,
)

DrawerNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
};




export default createAppContainer(DrawerNavigator);
