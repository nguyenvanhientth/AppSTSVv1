import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert
} from 'react-native';

const id = require('../image/id.png');
const logo_spkt = require('../image/Logo_spkt.png')

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    state = {
      masv : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Chúc Mừng", " Bạn đã đăng nhập thành công "+viewId);
    this.props.navigation.navigate('Main');
  }

  forgotClick = () => {
    this.props.navigation.navigate('Forgot');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={styles.logo_spkt} source={logo_spkt}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={id} />
          <TextInput style={styles.inputs}
              placeholder="Ma Sinh Vien"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(masv) => this.setState({masv})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
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
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 50
  },
  logo_spkt:{
    width: 150,
    height: 150
  }
});
