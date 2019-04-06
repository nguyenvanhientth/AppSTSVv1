import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert, ActivityIndicator,AsyncStorage } from 'react-native';
import env from '../environment/env';

const BASE_URL = env;
const id = require('../Icons/IdIcon.png');
const password = require('../Icons/PassWord.png');
const logo = require('../Images/Logo_spkt.png');

var STORAGE_KEY = 'key_access_token';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state={
            masv: '',
            password: '',
            status: false,
            loading: false
        }
    }
    componentDidMount= async () =>{
        //await AsyncStorage.clear();
    }

    _onChaneText = (masv) =>{
        this.setState({masv});
      }

      _onChanePassWord = (password) =>{
        this.setState({password}); 
      }

    _onPressLogin = () => {
        let serviceUrl =  BASE_URL + "Account/login";
        let userName = this.state.masv;
        let password = this.state.password;
        var access_token = '';
      if(userName.length === 0 || password.length === 0){
        alert('Ban chua nhap day du! ')
      }
      else{
        this.setState({loading: true})     
        fetch(serviceUrl,{
          method: "POST",  
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
              body: JSON.stringify({
                'UserName' : userName,
                'PassWord' :password
              })
        })
          .then((response) => response.json())
          .then((responseJSON) => {      
              //console.warn('asdasd',JSON.stringify(responseJSON.token)) ; 
              var { navigate } = this.props.navigation;
               access_token = responseJSON.token; 
               //console.warn('access_token',access_token) ; 
               if(access_token !=null){
                    try {
                        AsyncStorage.setItem(STORAGE_KEY, access_token);
                        navigate('Main');
                    } catch (error) {
                        console.log('AsyncStorage error: ' + error.message);
                    };
                    this.setState({loading:false});
                }
                else{
                    this.setState({loading:false})
                    Alert.alert('Login failure');
                 }  
          })
          .catch((error) => {
            Alert.alert('Login failure');
            this.setState({loading:false})
            //console.warn('asdsad',error);
          }); 
        }
    }  

    forgotClick = ()=>{
        this.props.navigation.navigate('Forgot');
    }

    render(){
        if (this.state.loading) {
            return(
                <View style = {{flex: 1,justifyContent:'center',backgroundColor: '#ECF8FB'}}>
                    <ActivityIndicator size='large' color="#0000ff" />
                </View>
                )
            } 
        else {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={logo}/>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Mã Sinh Viên"
                               keyboardType="number-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChaneText.bind(this)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={password}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Mật Khẩu"
                               keyboardType="default"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChanePassWord.bind(this)}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this._onPressLogin()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.forgotClick()}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>


            </View>
        );
    }
}
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
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
    inputIcon: {
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    textInput: {
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
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
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom : 70,
        width: 170,
        height: 170 
    }
})