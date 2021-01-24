import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    paddingLeft: 10,
    paddingTop: 70,

  }
})

export default Settings;
