import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Image, TextInput, TouchableHighlight, TouchableOpacity,ScrollView} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import ReactNativePickerModule from 'react-native-picker-module';

const xinGiay = require('../Images/xinGiay.png');
const nganhHoc = require('../Icons/nganhHocIcon.png');
const Address = require('../Icons/address.png');
const name = require('../Icons/name.png');
const tinh = require('../access/Tinh.json');
const huyen = require('../access/quan_huyen.json');
const xa = require('../access/xa_phuong.json');

export default class XinGiayXNScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {xinGiay} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            yearStudent:'',
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
    _onAddRess = (addRess) =>{
        this.setState({addRess});
      }
    _onYearStudent = (yearStudent) =>{
        this.setState({yearStudent});
      }
    _onPressConfirm = () => {}

    componentDidMount(){
        this.getdata();
    }

    getdata() {
        var display = [];
        // TODO: Json File data 
        var data = Object.keys(tinh).map((name) => {
        this.tinhArr.push(tinh[name]);
        return (
          <Text>Type of name: {tinh[name].name_with_type}</Text>
        )
      }) 
        if(this.tinhArr){
            var len = this.tinhArr.length;
            if (len > 0) {
            for (let i = 0; i < len; i++) {
                var data = this.tinhArr[i];
                display.push(data.name_with_type);
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
                if (data1.name_with_type === text) {
                    var data = Object.keys(huyen).map((name) => {
                        if (huyen[name].parent_code === data1.code) {
                            this.huyenArr.push(huyen[name]);
                            display.push(huyen[name].name_with_type);
                        }
                        return (
                          <Text>Type of name: {huyen[name].name_with_type}</Text>
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
                if (data1.name_with_type === text) {
                    var data = Object.keys(xa).map((name) => {
                        if (xa[name].parent_code === data1.code) {
                            display.push(xa[name].name_with_type)
                        }
                        return (
                          <Text>Type of name: {xa[name].name_with_type}</Text>
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
    onChange = () => {
        alert('click');
    }
    render() {
        return(
            <View>
                <HeaderComponent {...this.props}></HeaderComponent>
            <View style={styles.container}>
            <ScrollView style = {{paddingTop: '30%', width: '80%'}}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={name}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Địa chỉ"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onAddRess.bind(this)}
                    />
                </View>
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
                    <Image style={styles.inputIcon} source={nganhHoc}/>
                    <TextInput style={styles.textInput}
                               placeholder= "Sinh viên năm"
                               keyboardType="number-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onYearStudent.bind(this)}
                    />
                </View>
                <TouchableHighlight style={[styles.buttonContainer]} onPress={this._onPressConfirm.bind(this)}>
                    <Text style={styles.loginText}>Confirm</Text>
                </TouchableHighlight>
                </ScrollView>
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
        paddingBottom: 40,
        backgroundColor: '#99FFFF',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        padding:10,
        borderRadius:30,
        borderBottomWidth: 1,
        width:'100%',
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
        width:'100%',
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