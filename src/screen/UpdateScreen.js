import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const id = require('../image/id.png');
const city = require('../image/city.png');

export default class UpdateScreen extends Component{
    static navigationOptions = {
        drawerLabel: 'Update',
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            dataCity: [],
            data: [{gioiTinh: "Male",value: "Nam"},{gioiTinh:"Female",value: "Nam"}],
            isLoading: true
        }
    }
    componentDidMount(){
        return fetch('https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/tree.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState = ({
                dataCity : responseJson
            });
        })
        .catch((error) => {
        console.error(error);
        });
    }
    render(){
        return(
            <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.combobox}>
                
                    <Dropdown
                        style = {styles.inputs}
                        label='Select City'
                        data={this.state.data}
                        selectedItemColor = "blue"
                        
                    />
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={city} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={city} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
                <View style = {styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id} />
                    <TextInput style={styles.inputs}
                        placeholder="Ma Sinh Vien"
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                        onChangeText={(masv) => this.setState({masv})}/>
                </View>
            </View>
            </ScrollView>
        )
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
        marginLeft: 30,
        height:45,
        marginBottom:5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 30
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
    combobox: {
        margin: 5,
        height: 45,
        width: 250,
        backgroundColor:"#fff",
        flexDirection: 'row'
    }
  });
  