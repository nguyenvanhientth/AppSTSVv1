import { createStackNavigator, createAppContainer , createSwitchNavigator, createBottomTabNavigator} from "react-navigation";
import React from 'react';
import {Image} from 'react-native';
import MyApp from '../Navigations/DrawerNavigator';
import LoginStackNavigator from './LoginStackNavigator';
import SplashScreen from '../Screens/SplashScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const home = require('../Images/home.png');
const profile = require('../Images/profile.png');

const SplashStack = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,navigationOptions: {header: null} 
    }
})

const stackProfile = createStackNavigator({
  Profile: {
    screen: ProfileScreen, navigationOptions: {header: null}
  }
})

const tabProfile = createBottomTabNavigator(
  {
    Home: {
      screen: MyApp,
      navigationOptions: {
        tabBarLabel:" ",
        tabBarIcon: ({ tintColor }) => (
          <Image source = {home} style = {{height:40,width:40, marginTop: 25,paddingBottom:30}} />
        )
      },
    },
    Profile: {
      screen: stackProfile,
      navigationOptions: {
        tabBarLabel:" ",
        tabBarIcon: ({ tintColor }) => (
          <Image source = {profile} style = {{height:40,width:40, marginTop: 25,paddingBottom:30}} />
        )
      },
    }
  },
  {
    initialRouteName: 'Home',
  }
)

const RootStack = createSwitchNavigator(
  {
    Splash: {screen: SplashStack,navigationOptions: {header: null} },
    Login : {screen: LoginStackNavigator,navigationOptions: {header: null} },
    Main : {screen: tabProfile,navigationOptions: {header: null} },
    },
    {
      initialRouteName: 'Splash',
      headerMode: null
    }
  );

const AppContainer = createAppContainer(RootStack);

export default AppContainer;