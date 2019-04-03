import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const update = require('../Images/update.png');

export default class UpdateScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {update} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <HeaderComponent {...this.props} ></HeaderComponent>
                <View style={styles.container}>
                    <Text style={styles.text}>Screen update!</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 10 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize : 30
    },icon1: {
        width: 25,
        height: 25
    },
})