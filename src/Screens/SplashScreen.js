import React, {Component} from 'react';
import {View, Image, StyleSheet,AsyncStorage} from 'react-native';

const logo = require('../Images/Logo_spkt.png');
var STORAGE_KEY = 'key_access_token';

export default class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        )
      }
      componentDidMount = async()=>{
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this._bootstrapAsync();
        }
    }
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem(STORAGE_KEY);
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'Main' : 'Login');
    };
      render() {
        return (
          <View style={styles.viewStyles}>
            <Image style={styles.imageStyles} source={logo}/>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FFFF'
      },
      imageStyles: {
        width : 300,
        height : 300
      }
      
    })