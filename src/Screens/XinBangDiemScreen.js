import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent'

export default class XinBangDiemScreen extends Component{
    static navigationOptions = {
        header: null,
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
    }
})