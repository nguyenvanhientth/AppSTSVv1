import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { DrawerItems } from 'react-navigation';
import env from '../environment/env';

const BASE_URL = env;
var STORAGE_KEY = 'key_access_token';
const logout = require('../Images/logout.png');
var profile = require('../Images/profile.png');

export default class SiderBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName: '',
            profile: null
        }
    }
    componentDidMount() {  
        this._getInfomation();
      }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login');
      };
    _getInfomation = async () => {
        const userToken = await AsyncStorage.getItem(STORAGE_KEY);
        let url = BASE_URL + 'Account/GetUserInformation'
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + userToken,
            },
        })
        .then((res) => res.json())
        .then((resJson) => {
            this.setState({
                firstName: resJson.firstName,
                lastName: resJson.lastName
            })
        });
    }
    //   componentDidUpdate(){
    //         this.componentDidMount();
    //     }
    render(){
        const props = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image style = {{width: 70, height: 70, borderRadius: 60, marginTop: 35}} source={profile} /> 
                    <Text style={styles.userInfoText}>Hi {this.state.lastName} {this.state.firstName}</Text>
                </View>
                <View>
                    <DrawerItems {...props}/>
                </View>
                <TouchableOpacity onPress={()=>this._signOutAsync()} style={styles.btnSignOut}>
                    <Image source = {logout} resizeMode="contain" style = {styles.icon} />
                    <Text style={styles.signOutText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    profileContainer:{
        backgroundColor: '#29ACE4', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    userInfoText:{
        color: '#fff', 
        fontSize: 18, 
        marginTop: 10
    },
    btnSignOut:{
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 20,
    },
    signOutText:{
      fontSize: 14,
      color: 'black',
      fontWeight: '500',
      marginLeft: 20,
    }
  })