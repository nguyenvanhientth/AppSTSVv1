import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Image, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import ReactNativePickerModule from 'react-native-picker-module';

const update = require('../Images/update.png');
const Address = require('../Icons/address.png');
const Role = require('../Icons/role.png');
const name = require('../Icons/name.png');
const dantoc = require('../Icons/dantoc.jpg');
const tongiao = require('../Icons/tongiao.png');
const tinh = require('../access/Tinh.json');
const huyen = require('../access/quan_huyen.json');
const xa = require('../access/xa_phuong.json');

export default class UpdateScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {update} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        this.state = {
            valueRole: null,
            Role: ['Male','Female'],
            valueTinh: null,
            nameTinh:'Select Tinh/TP',
            tinhList: [],
            valueHuyen: null,
            nameHuyen:'Select Quan/Huyen',
            huyenList:[],
            valueXa:null,
            nameXa:'Select Xa/Phuong',
            xaList:[]
        }
        this.tinhArr = [];
        this.huyenArr = [];
    }
    componentDidMount(){
        this.getdata();
    }
    getdata() {
        var display = [];
        // TODO: Json File data 
        var data = Object.keys(tinh).map((name) => {
        this.tinhArr.push(tinh[name]);
        return (
          <Text>Type of name: {tinh[name].name}</Text>
        )
      }) 
        if(this.tinhArr){
            var len = this.tinhArr.length;
            if (len > 0) {
            for (let i = 0; i < len; i++) {
                var data = this.tinhArr[i];
                display.push(data.name);
            }
            }
            this.setState({
            tinhList: display  
            });
        }   
    }
    onChangeText=(text)=>{
        var display= [];
        this.setState({
            nameHuyen: 'Select Huyen',
            nameXa: 'Select Xa'
        })
        if(this.tinhArr){
            var len = this.tinhArr.length;
            if (len > 0) {
              for (let i = 0; i < len; i++) {
                var data1 = this.tinhArr[i];
                if (data1.name === text) {
                    var data = Object.keys(huyen).map((name) => {
                        if (huyen[name].parent_code === data1.code) {
                            this.huyenArr.push(huyen[name]);
                            display.push(huyen[name].name);
                        }
                        return (
                          <Text>Type of name: {huyen[name].name}</Text>
                        )
                        
                    });
                }
              }
            }
            // if(this.huyenArr){
            //     var len = this.huyenArr.length;
            //     if (len > 0) {
            //     for (let i = 0; i < len; i++) {
            //         var data = this.huyenArr[i];
            //         display.push(data.name);
            //     }
            //     //console.warn(display)
            //     }
                this.setState({
                huyenList: display  
                });
            // }   
        }  
    }
    onChangeHuyen =(text)=>{
        var display= [];
        this.setState({
            nameXa: 'Select Xa'
        })
        if(this.huyenArr){
            var len = this.huyenArr.length;
            if (len > 0) {
              for (let i = 0; i < len; i++) {
                var data1 = this.huyenArr[i];
                if (data1.name === text) {
                    var data = Object.keys(xa).map((name) => {
                        if (xa[name].parent_code === data1.code) {
                            display.push(xa[name].name)
                        }
                        return (
                          <Text>Type of name: {xa[name].name}</Text>
                        )
                        
                    });
                }
              }
            }
            this.setState({
                xaList: display,
            })
        }  
    }
    render() {
        return(
            <View>
                <HeaderComponent {...this.props}></HeaderComponent>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={name}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Họ Tên"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={dantoc}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Dân Tộc"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={tongiao}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Tôn giáo"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <TouchableOpacity style = {styles.inputContainer} onPress={() => {this.pickerRef.show()}}>
                    <Image style={styles.inputIcon} source={Role}/>
                    <ReactNativePickerModule
                        pickerRef={e => this.pickerRef = e}
                        value={this.state.valueRole}
                        title={"Select Role"}
                        items={this.state.Role}
                        onValueChange={(i) => {
                            this.setState({
                            valueRole: i
                            })
                    }}/>
                    <Text style = {styles.text}>{this.state.Role[this.state.valueRole]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.inputContainer} onPress={() => {this.pickerRef1.show()}}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <ReactNativePickerModule
                        pickerRef={e => this.pickerRef1 = e}
                        value={this.state.valueTinh}
                        title={"Select City"}
                        items={this.state.tinhList}
                        onValueChange={(i) => {
                            this.onChangeText(this.state.tinhList[i]);
                            this.setState({
                            valueTinh: i,
                            nameTinh: this.state.tinhList[i]
                            })
                        }}
                    />
                    <Text style = {styles.text}>{this.state.nameTinh}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.inputContainer} onPress={() => {this.pickerRef2.show()}}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <ReactNativePickerModule
                        pickerRef={e => this.pickerRef2 = e}
                        value={this.state.valueHuyen}
                        title={"Select Quan/Huyen"}
                        items={this.state.huyenList}
                        onValueChange={(i) => {
                            this.onChangeHuyen(this.state.huyenList[i])
                            this.setState({
                            valueHuyen: i,
                            nameHuyen: this.state.huyenList[i]
                            })
                    }}/>
                    <Text style = {styles.text}>{this.state.nameHuyen}</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.inputContainer} onPress={() => {this.pickerRef3.show()}}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <ReactNativePickerModule
                        pickerRef={e => this.pickerRef3 = e}
                        value={this.state.valueXa}
                        title={"Select Xa/Phuong/T.Tran"}
                        items={this.state.xaList}
                        onValueChange={(i) => {
                            this.setState({
                            valueXa: i,
                            nameXa: this.state.xaList[i]
                            })
                    }}/>
                    <Text style = {styles.text}>{this.state.nameXa}</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Thời gian nhập học"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Address}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Ngành học"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(address)=>this.setState({address})}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer]} onPress={() => this.onClickListener('registration')}>
                    <Text style={styles.loginText}>Change</Text>
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
        paddingBottom: 40
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
    text: {
        fontSize : 20,
        alignItems: 'center',
        marginLeft: '10%'
    },icon1: {
        width: 25,
        height: 25
    },
})