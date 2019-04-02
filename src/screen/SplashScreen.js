import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
            <Text style={styles.textStyles}>
              Logo Image
            </Text>
          </View>
        );
      }
    }
    
    const styles = {
      viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
      },
      textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      }
    }