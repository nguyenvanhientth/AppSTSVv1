import React, { Component } from 'react';
import {
  View, Image, TouchableHighlight,Text
} from 'react-native';

export default class HeaderComponent extends Component {
  componentDidMount(){
    this.props.navigation.closeDrawer();
  }
  render() {
    const key = this.props.navigation.state ? this.props.navigation.state.key : '';
    return (
      <View style={{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#29ACE4'
        }}
      >
        <TouchableHighlight
          style={{ marginLeft: 7, marginTop: 7 }}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image
            style={{ width: 40, height: 40, marginTop: 20 }}
            source={require('../Icons/menuIcon.png')}
          />
        </TouchableHighlight>
        <Text style = {{position: 'absolute', left: '20%',  fontWeight: '700', fontSize: 25,color: 'black',top: 30}}>{key}</Text>
      </View>
    );
  }
}