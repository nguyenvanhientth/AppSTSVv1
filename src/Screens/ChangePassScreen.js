import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert, Platform
} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';

const pass = require('../Icons/PassWord.png');
const change = require('../Images/change.png');

export default class ChangePassScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({icon}) =>(
      <Image source = {change} resizeMode="contain" style = {[styles.icon1]} />
  )
};

  constructor(props) {
    super(props);
    state = {
      OldPass: '',
      NewPass: '',
      ConPass: '',
      loading: false
    }
  }

  _onChaneOld = (OldPass) => {
    this.setState({
      OldPass,
    })
}

_onChaneNew = (NewPass) => {
  this.setState({NewPass})
}

_onChaneConfim = (ConPass) => {
  this.setState({ConPass})
}

_onPressForgot = () => {
  
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
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Mật khẩu cũ"
              secureTextEntry={true}
              //nderlineColorAndroid='transparent'
              onChangeText={this._onChaneOld.bind(this)}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Mật khẩu mới"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={this._onChaneNew.bind(this)}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={pass}/>
          <TextInput style={styles.inputs}
              keyboardType="default"
              placeholder="Xác nhận mật khẩu mới"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={this._onChaneConfim.bind(this)}/>
        </View>
        <View style={{ flexDirection:'row', }}>
            <TouchableHighlight style={[styles.buttonContainer]} onPress={this._onPressForgot.bind(this)}>
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
        backgroundColor: '#99FFFF',
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
  },
  icon1: {
    width: 25,
    height: 25
  },
});
