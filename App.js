/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoginScreen from './src/screen/LoginScreen';
import UpdateScreen from './src/screen/UpdateScreen';
import ForgotPassScreen from './src/screen/ForgotPassScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: LoginScreen,
    },
    Main: {
      screen: UpdateScreen,
    },
    Forgot:{
      screen: ForgotPassScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
