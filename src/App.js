import React,{ useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyTabs from './components/MyTabs';
import ScreenStack from './components/ScreenStack'; 
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import auth from '@react-native-firebase/auth';
import {AuthContext} from './components/AuthProvider';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      user: '',
      initializing: 'true'
    }
    this.onAuthStateChanged = this.onAuthStateChanged.bind(this);
  }

   onAuthStateChanged(user) {
    this.setState(user);
    if(this.state.initializing) this.setState({initializing: 'false'});
  }

  componentDidMount(){
    this.checkPermission();
     const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true, 
      requestPermissions: true,
    });
    return subscriber;
  }

// Remote Notification permissions request
async checkPermission(){
  console.log("check permission function call");
  const enabled = await messaging().hasPermission();
  console.log("check permission function call enable", enabled)
  if(enabled){
    this.getToken();

  }else {
    this.requestPermission();
  }

}

// remote NOtification token
async getToken(){
  console.log("get token call")
  //let fcmToken = await AsyncStorage.read('fcmToken');
  console.log("get token call fcm token", fcmToken)
  if(!fcmToken){
    fcmToken = await messaging().getToken();
    if(fcmToken){
     // await AsyncStorage.save('fcmToken', fcmToken);
    }
  }
}


//Remote location message user permission
async requestPermission(){
  console.log("requestPermission call");
  try{
    await messaging().requestPermission();
    //user has authorised
    this.getToken();
  }catch(error){
    //User has rejected permissions
  }
  }







  render(){
    //if(this.state.initializing) return null;
    return (
      <NavigationContainer>
        <ScreenStack/>
        </NavigationContainer>
    );

  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
