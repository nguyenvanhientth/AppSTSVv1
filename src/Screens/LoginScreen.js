import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert, Platform } from 'react-native';

const id = require('../Icons/IdIcon.png');
const password = require('../Icons/PassWord.png')
const logo = require('../Images/Logo_spkt.png')

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        state={
            masv: '',
            password: '',
        }
    }

    onClickListener = ()=>{
        Alert.alert("Đăng nhập thành công !");
        this.props.navigation.navigate('Main');
    }

    forgotClick = ()=>{
        this.props.navigation.navigate('Forgot');
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={logo}/>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Mã Sinh Viên"
                               keyboardType="number-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={(masv)=>this.setState({masv})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={password}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Mật Khẩu"
                               keyboardType="default"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password)=>this.setState({password})}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.forgotClick()}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#DCDCDC'
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