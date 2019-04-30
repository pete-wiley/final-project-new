import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import DrawerNavigation from './App'

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => DrawerNavigation);
