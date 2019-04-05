import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform, TextInput, TouchableOpacity,TouchableHighlight} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import ReactNativePickerModule from 'react-native-picker-module';

const xinGiay = require('../Images/xinGiay.png');
const name = require('../Icons/name.png');
const id = require('../Icons/IdIcon.png');

export default class XinBangDiemScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {xinGiay} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            masv:'',
            livingClass:'',
            Semester: ['Học kì I','Học kì II','Học kì III','Học kì IV','Học kì V','Học kì VI','Tất cả học kì'],
        }
    }

    _onFullName = (fullName)=>{
        this.setState({fullName})
    }

    _onChangeText = (masv)=>{
        this.setState({masv})
    }

    _onLivingClass = (livingClass)=>{
        this.setState({livingClass})
    }

    _onPressConfirm = ()=>{}

    render(){
        return(
            <View>
                <HeaderComponent {...this.props} ></HeaderComponent>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={name}/>
                        <TextInput style={styles.textInput}
                                placeholder= "Họ Tên"
                                keyboardType="default"
                                underlineColorAndroid='transparent'
                                onChangeText={this._onFullName.bind(this)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Mã Sinh Viên"
                               keyboardType="number-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChangeText.bind(this)}
                    />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={name}/>
                        <TextInput style={styles.textInput}
                                placeholder= "Lớp sinh hoạt"
                                keyboardType="default"
                                underlineColorAndroid='transparent'
                                onChangeText={this._onLivingClass.bind(this)}
                        />
                    </View>

                    <TouchableOpacity style = {styles.inputContainer} onPress={() => {this.pickerRef.show()}}>
                    <Image style={styles.inputIcon} source={xinGiay}/>
                    <ReactNativePickerModule
                        pickerRef={e => this.pickerRef = e}
                        value={this.state.valueSemester}
                        title={"Select Semester"}
                        items={this.state.Semester}
                        onValueChange={(i) => {
                            this.setState({
                            valueSemester: i
                            })
                    }}/>
                    <Text style = {styles.text}>{this.state.Semester[this.state.valueSemester]}</Text>
                </TouchableOpacity>

                <TouchableHighlight style={[styles.buttonContainer]} onPress={this._onPressConfirm.bind(this)}>
                    <Text style={styles.loginText}>Confirm</Text>
                </TouchableHighlight>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
        backgroundColor: '#99FFFF',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        padding:10,
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
    icon1: {
        width: 25,
        height: 25
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:'80%',
        borderRadius:30,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        backgroundColor: "#00b5ec",
        marginTop: 20
    },
})