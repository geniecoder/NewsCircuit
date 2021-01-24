import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import Details from '../screens/Details';
import WebView1 from '../screens/WebView1';

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="NewsDetails" component={Details} />
      <Stack.Screen name="WebView" component={WebView1}/>

    </Stack.Navigator>
  );
}
export default ScreenStack;