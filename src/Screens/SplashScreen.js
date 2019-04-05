import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const logo = require('../Images/Logo_spkt.png')

export default class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        )
      }
    
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.props.navigation.navigate('Main');
        }
        this.props.navigation.navigate('Login');
      }
    
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