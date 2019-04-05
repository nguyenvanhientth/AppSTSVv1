import React from 'react';
import { Text, View, ScrollView, StyleSheet, AsyncStorage , Image} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const main = require('../Images/home.png');
var STORAGE_KEY = 'key_access_token';

export default class MainScreen extends React.Component {
    static navigationOptions = {
         title: 'Home',
           drawerIcon: ({icon}) =>(
            <Image source = {main} resizeMode="contain" style = {[styles.icon1]} />
        )
    };
    componentDidMount(){
        AsyncStorage.getItem(STORAGE_KEY).then((user_data_json) => {
            let token = user_data_json;   
            console.warn(token)
            if(token === null){
              var { navigate } = this.props.navigation;
              navigate('Login');
              this.setState({
                  loading: false
              })
            }
            else{
    //-----------get data async from helper----------------------
            }    
        })
    }
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