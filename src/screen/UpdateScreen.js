import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class UpdateScreen extends Component{
    static navigationOptions = {
        drawerLabel: 'Update',
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View>
                <Text>Screen update!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})