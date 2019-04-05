import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent'

const xinGiay = require('../Images/xinGiay.png');

export default class XinBangDiemScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {xinGiay} resizeMode="contain" style = {[styles.icon1]} />
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
                    <Text style={styles.text}>Xin Bảng Điểm!</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize : 30
    },
    icon1:{
        height:25,
        width:25
    },
})