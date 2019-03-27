import React, { Component } from 'react';
import { Platform , Dimensions } from 'react-native';
import { CreateDrawerNavigator, createAppcontainer } from 'react-navigation';

import MainScreen from '../screen/MainScreen'

const WIDTH = Dimensions.get('window').width;
const DeawerNavigatior = createAppcontainer({
    Home: {
        screen : MainScreen
    },
});

export default createAppcontainer(DeawerNavigatior);
