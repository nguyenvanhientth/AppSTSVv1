import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class UpdateScreen extends Component{
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
            <View style={styles.container}>
                <Text style={styles.text}>Screen update!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize : 30
    }
})