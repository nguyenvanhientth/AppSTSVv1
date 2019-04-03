import React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform, Image , TouchableOpacity} from 'react-native';

const profile = require('../Images/profile.png');
const phone = require('../Images/phone.png');
const email = require('../Images/email1.png');
const address = require('../Images/address.png');

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'UserName'
        }
    }
    logoutClick = () =>{
        alert('Onclick');
        this.props.navigation.navigate('Login')
    } 
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.conProfile}>
                    <Image source = {profile} style = {styles.imageProfile}/>
                    <View style = {styles.conProfile}>
                        <Text style = {styles.name}>Hello {this.state.name}</Text>
                        <TouchableOpacity style = {styles.logout} onPress = {() => this.logoutClick()}><Text>Logout</Text></TouchableOpacity>
                    </View>
                </View>
                <View style = {{width:'100%'}}>
                    <View style = {styles.comPhone}>
                        <Image source = {phone} style = {styles.icon}/>  
                        <Text style={styles.text}>
                            0123456789
                        </Text>
                    </View>
                    <View style = {styles.comPhone}>
                        <Image source = {email} style = {styles.icon}/>  
                        <Text style={styles.text}>
                            nguyenvana@gmail.com
                        </Text>
                    </View>
                    <View style = {styles.comPhone}>
                        <Image source = {address} style = {styles.icon}/>  
                        <Text style={styles.text}>
                            Hoa khanh Nam, lien chieu , Da Nang, Viet Nam
                        </Text>
                    </View>
                </View>
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
        fontSize : 20
    },
    name: {
        fontSize: 20,
        marginTop: 10,
    },  
    conProfile: {
        height: '60%',
        width:'100%',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81F7F3',
        //borderBottomLeftRadius: 50,
        //borderBottomRightRadius: 50,
    },
    imageProfile: {
        height: '55%',
        width: '55%',
        marginTop: 30
    },
    logout: {
        marginTop: 20,
        color: 'green'
    },
    icon: {
        height: 30,
        width: 30,
        marginRight:10
    },
    comPhone:{
        flexDirection: 'row',
        marginTop:20,
        paddingLeft: 10,
        paddingRight:15
    }
})