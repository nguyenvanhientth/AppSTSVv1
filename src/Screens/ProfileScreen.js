import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform } from 'react-native';

export default class MainScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            
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
        justifyContent : 'center',
        alignItems : 'center',
    },
    text: {
        fontSize : 30
    }
})