import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const main = require('../Images/home.png')

export default class MainScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Main',
    //       drawerIcon: ({icon}) =>(
    //         <Image source = {main} resizeMode="contain" style = {[styles.icon1]} />
    //     )
    //   };
    render(){
        return(
            <View>
            <HeaderComponent {...this.props} ></HeaderComponent>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Main !
                </Text>
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    text: {
        fontSize : 30
    },
    icon1: {
        width: 25,
        height: 25
    },
})