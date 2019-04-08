import React,{ Component } from 'react';
import { Text, View, ScrollView, StyleSheet, AsyncStorage , Image, FlatList} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import flastListData from '../data/flastListData'

const main = require('../Images/home.png');
var STORAGE_KEY = 'key_access_token';

class FlastListItem extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textName}>{this.props.item.name}</Text>
                <Text style={styles.textContent}>{this.props.item.content}</Text>
                <Text style={styles.textAuther}>{this.props.item.auther}</Text>
            </View>
        );
    }
}

export default class MainScreen extends React.Component {
    static navigationOptions = {
         title: 'Home',
           drawerIcon: ({icon}) =>(
            <Image source = {main} resizeMode="contain" style = {[styles.icon1]} />
        )
    };
    componentDidMount(){
        AsyncStorage.getItem(STORAGE_KEY).then((user_data_json) => {
            let token = user_data_json;   
            //console.warn(token)
            if(token === null){
              var { navigate } = this.props.navigation;
              navigate('Login');
              this.setState({
                  loading: false
              })
            }
            else{
    //-----------get data async from helper----------------------
            }    
        })
    }
    render(){
        return(
            <View>
            <HeaderComponent {...this.props} ></HeaderComponent>
            <ScrollView>
            <View style={styles.container}>
                <FlatList data={flastListData}
                          renderItem={({item,index})=>{
                            return(<FlastListItem item={item} index={index}>

                            </FlastListItem>);
                          }}>

                </FlatList>
            </View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#99FFFF',
        
    },
    icon1: {
        width: 25,
        height: 25
    },
    textName: {
        padding : 8,
        fontSize:16,
        fontWeight: 'bold',
    },textContent: {
        fontSize : 13,
        padding : 8
    },
    textAuther: {
        fontSize: 10,
        paddingBottom: 15,
    }
})