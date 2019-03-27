import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import DrawerNavigation from '../navigation/DrawerNavigator'
import ChangePassScreen from '../screen/ChangePassScreen'

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Main!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30
  }
});