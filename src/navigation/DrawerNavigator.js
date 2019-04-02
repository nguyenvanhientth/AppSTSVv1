 import React, { Component } from 'react';
 import { Platform , Dimensions } from 'react-native';
 import { createDrawerNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';
 import MainScreen from '../screen/MainScreen';
 import ChanePassScreen from '../screen/ChangePassScreen';
 import UpdateScreen from '../screen/UpdateScreen';

const WIDTH = Dimensions.get('window').width;
const  DeawerNavigatior = createDrawerNavigator({
    Home: {
        screen: MainScreen
     },
    ChanePass: {
        screen: ChanePassScreen
    },
    Update: {
        screen: UpdateScreen
    }
 },
 {
    navigationOptions: {
        header: null,
    }
 });

 export default MainApp = createStackNavigator({
     DrawerStack: {
         screen: DeawerNavigatior
     }
 })