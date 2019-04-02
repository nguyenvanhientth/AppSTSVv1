/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from './src/navigation/StackNavigator'

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    );
  }
}
