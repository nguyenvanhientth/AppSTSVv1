import React from 'react';
import { Text, View, Button } from 'react-native';


export default class UpdateScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main!</Text>
        <Button
          title="Log out"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}