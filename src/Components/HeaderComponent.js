import React, { Component } from 'react';
import {
  View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
        }}
      >
        <TouchableHighlight
          style={{ marginLeft: 7, marginTop: 7 }}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../Icons/menuIcon.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}