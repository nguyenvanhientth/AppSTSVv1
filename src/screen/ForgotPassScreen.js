import React, { Component } from 'react';
import {
  StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert
} from 'react-native';

const id = require('../image/id.png');
const phone = require('../image/phone.png');

export default class ForgotPassScreen extends Component {
  static navigationOptions = {
    header: null,
};

  constructor(props) {
    super(props);
    state = {
      masv : '',
      sdt: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={id} />
          <TextInput style={styles.inputs}
              placeholder="Ma Sinh Vien"
              keyboardType="number-pad"
              underlineColorAndroid='transparent'
              onChangeText={(masv) => this.setState({masv})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={phone}/>
          <TextInput style={styles.inputs}
              placeholder="So DT"
              keyboardType = "phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(sdt) => this.setState({sdt})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
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
