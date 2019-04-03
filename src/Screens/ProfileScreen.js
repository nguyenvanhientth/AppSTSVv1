import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform, Image } from 'react-native';

const profile = require('../Images/profile.png');

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.conProfile}>
                    <Image source = {profile} style = {styles.imageProfile} />
                </View>
                <Text style={styles.text}>
                    Profile !
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        //justifyContent : 'center',
        alignItems : 'center',
    },
    text: {
        fontSize : 30
    },
    conProfile: {
        height: '50%',
        width:'100%',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81F7F3'
    },
    imageProfile: {
        height: '55%',
        width: '55%'
    }
})