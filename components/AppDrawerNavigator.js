
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './CustomSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen
    },
  MyBarters:{
      screen : MyBartersScreen,
    },
    Setting : {
      screen : SettingScreen
    }
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })
