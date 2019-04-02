import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert } from 'react-native';

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
            email : ''
        }
    }

    onClickListener= ()=>{
        Alert.alert("Lấy lại mật khẩu thành công !","Một mật khẩu tạm thời đã được gửi về Email cho bạn. Vui lòng kiểm tra và đăng nhập lại với mật khẩu mới !");
        this.props.navigation.navigate('Login');
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
                               onChangeText={(masv)=> this.setState({masv})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={email}/>
                    <TextInput style={styles.inputs}
                               placeholder= "Email"
                               keyboardType= "email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email)=> this.setState({email})}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.onClickListener()}>
                    <Text style={styles.loginText}>Request</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
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
    }
  });
  