import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { DrawerItems } from 'react-navigation';

var STORAGE_KEY = 'key_access_token';
const logout = require('../Images/logout.png');
var profile = require('../Images/profile.png');

export default class SiderBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'Nguyen',
            lastName: 'Hien',
            profile: null
        }
    }
    componentDidMount() {       
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
                <TouchableOpacity onPress={this.signOut} style={styles.btnSignOut}>
                    <Image source = {logout} resizeMode="contain" style = {styles.icon} />
                    <Text style={styles.signOutText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        )
    }

    signOut = ()=>{
        //AsyncStorage.clear();
        AsyncStorage.removeItem(STORAGE_KEY)
        setTimeout(()=>{
            this.props.navigation.navigate('Login');
        }, 500)
        
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