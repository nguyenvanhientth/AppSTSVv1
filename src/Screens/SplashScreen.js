import React, {Component} from 'react';
import {View, Image, StyleSheet,AsyncStorage} from 'react-native';

const logo = require('../Images/Logo_spkt.png');
var STORAGE_KEY = '';

export default class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            5000
          )
        )
      }
      componentDidMount(){
        AsyncStorage.getItem(STORAGE_KEY).then((user_data_json) => {
            let token = user_data_json;   
            //console.warn(token)
            if(token === null){
              var { navigate } = this.props.navigation;
              navigate('Login');
              this.setState({
                  loading: false
              })
            }
            else{
    //-----------get data async from helper----------------------
              this.props.navigation.navigate('Main');
            }    
        })
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