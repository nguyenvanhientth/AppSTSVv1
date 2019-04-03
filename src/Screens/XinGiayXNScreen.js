import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert,Platform } from 'react-native';
import HeaderComponent from '../Components/HeaderComponent'

const Address = require('../Icons/address.png');
const xinGiay = require('../Images/xinGiay.png');

export default class XinGiayXNScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {xinGiay} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        state= {
            address: '',
            khoa: '',
            HocKi: '',
            LyDo: ''
        }
    }
    onClickListener = ()=>{
        Alert.alert("Đăng nhập thành công !");
        this.props.navigation.navigate('Main');
    }
    render(){
        return(
            <View>
                <HeaderComponent {...this.props}></HeaderComponent>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Địa Chỉ"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Chọn Tỉnh/Thành"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Chọn Huyện/Quận"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Chọn Xã/Phương"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Nơi Sinh"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Sinh Viên Khóa"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(khoa)=>this.setState({khoa})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Học Kì"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(HocKi)=>this.setState({HocKi})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Lý Do"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(LyDo)=>this.setState({LyDo})}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener('registration')}>
                    <Text style={styles.loginText}>Đăng ký</Text>
                </TouchableHighlight>
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
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'80%',
        height:45,
        marginBottom:10,
        flexDirection: 'row',
        alignItems:'center',
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
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
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        backgroundColor: "#00b5ec",
        marginTop: 20
    },
      loginText: {
        color: 'white',
    },
    icon1:{
        height:25,
        width:25
    }
})