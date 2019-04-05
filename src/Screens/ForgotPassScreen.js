import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert,TouchableOpacity } from 'react-native';

const id = require('../Icons/IdIcon.png');
const email = require('../Icons/emailIcon.png');

export default class FogotPassScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        state= {
            masv : '',
            Email : ''
        }
    }

    _onChaneText = (masv) => {
      this.setState({
        masv,
      })
  }

  _onChaneEmail = (Email) => {
    this.setState({Email})
  }

  _onPressForgot = () => {

  }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id}/>
                    <TextInput style={styles.inputs}
                               placeholder= "Mã Sinh Viên"
                               keyboardType= "number-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChaneText.bind(this)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={email}/>
                    <TextInput style={styles.inputs}
                               placeholder= "Email"
                               keyboardType= "email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChaneEmail.bind(this)}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onPressForgot.bind(this)}>
                    <Text style={styles.loginText}>Request</Text>
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Login')}>
                        <View >
                        <Text style={styles.cancle}> Go back login! </Text>        
                        </View>      
                    </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#99FFFF'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    cancle:{
      color:'#0404B4',
      backgroundColor:"transparent",
      textAlign: 'center',
    },
  });
  