import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert, Platform
} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const id = require('../Icons/IdIcon.png');
const pass = require('../Icons/PassWord.png');

export default class ChangePassScreen extends Component {
  static navigationOptions = {
    header: null,
    
};

  constructor(props) {
    super(props);
    state = {
      masv : '',
      password: '',
    }
  }

  onClickListener = () => {
    Alert.alert("Đổi Mật Khẩu Thành Công");
    this.props.navigation.navigate('Home');
  }
  onClickCancel = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <HeaderComponent {...this.props}></HeaderComponent>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={id} />
          <TextInput style={styles.inputs}
              placeholder="Mã Sinh Viên"
              keyboardType="number-pad"
              //underlineColorAndroid='transparent'
              onChangeText={(masv) => this.setState({masv})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Mật khẩu cũ"
              secureTextEntry={true}
              //nderlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Mật khẩu mới"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Xác nhận mật khẩu mới"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={{ flexDirection:'row', }}>
            <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener()}>
              <Text style={styles.loginText}>Đổi</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickCancel()}>
              <Text style={styles.loginText}>Hủy</Text>
            </TouchableHighlight>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'column',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width: '80%',
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'grey',
      shadowOpacity: 1.0,
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
    width:90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    marginLeft:20,
    marginRight:20,
    backgroundColor: "#00b5ec",
    shadowColor: 'grey',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 1
  },
  loginText: {
    color: 'white',
  }
});
