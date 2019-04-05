import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,Alert, Platform } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import HeaderComponent from '../Components/HeaderComponent';

const tkb = require('../Images/tkbIcon.png')

export default class ThoiKhoaBieuScreen extends Component{
    static navigationOptions = {
        drawerIcon: ({icon}) =>(
            <Image source = {tkb} resizeMode="contain" style = {[styles.icon1]} />
        )
      };
    constructor(props){
        super(props);
        this.state = {
            tableHead: [' Tiết ','Sáng','Phòng','Chiều','Phòng'],
            tableTitle: ['Tiết 1', 'Tiết 2', 'Tiết 3', 'Tiết 4','Tiết 5'],
            tableData: [
                ['Ly','2','Hoa','4'],
                ['','7','Toan','0'],
                ['','','',''],
                ['','','',''],
                ['','','',''],
            ]
        }
    }

    render(){
        return(
        <View>
        <HeaderComponent {...this.props}></HeaderComponent>
        <View style={styles.container}>
        <Table>
          <Row data={this.state.tableHead} flexArr={[1, 2, 1, 2,1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={this.state.tableTitle} style={styles.title}  textStyle={styles.text}/>
            <Rows data={this.state.tableData} flexArr={[ 2, 1, 2,1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa', height: 140 },
    row: {  height: 28  },
    text: { textAlign: 'center' },
    icon1: {
        width: 25,
        height: 25
    },
  });