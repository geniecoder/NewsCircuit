import React, { Component } from 'react';
import { View, Text, SafeAreaView,StyleSheet,StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import InnerHeader from '../components/InnerHeader';

export default class WebView1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: ''
    }
    const d = this.props.route.params;
    console.log(`data: ${JSON.stringify(d.url)}`);
    this.state.URL = d.url;
    // console.log(`my props ${JSON.stringify(this.props)}`);

  }
  render() {
    return (

    <>
      <InnerHeader navigation={this.props.navigation}/>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <WebView source={{ uri: this.state.URL }} />
      </SafeAreaView>
  

    </>
      
    );
  }
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  }

});
