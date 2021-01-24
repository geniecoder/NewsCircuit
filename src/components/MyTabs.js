import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeIcon from '../assets/icons/baseline_home_black.png';
import hotNewsIcon from '../assets/icons/baseline_local_see_black.png';
import recentVideoIcon from '../assets/icons/baseline_stairs_black.png';

const TabBottom = createBottomTabNavigator();

function MyTabs() {
  return (
    <TabBottom.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconColor;
          let iconImage;
          let label;

          if (route.name === 'All News') {
            iconImage = homeIcon;
            label = "All News"
          } else if (route.name === 'Top News') {
            iconImage = hotNewsIcon;
            label = "Top News"
          }
          else if (route.name === 'Life Style') {
            iconImage = recentVideoIcon;
            label = "Life Style"
          }

          if (focused) {
            iconColor = 'red';
          } else {
            iconColor = 'black';
           
          }


          return (
            <View style={styles.iconStyle}>
              <Image source={iconImage} style={[styles.iconImage, { tintColor: iconColor }]} />
              <Text style={[styles.labelStyle, { color: iconColor }]}>{label}</Text>
            </View>

          );


          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <TabBottom.Screen name="All News" component={Home} />
      <TabBottom.Screen name="Top News" component={Home} />
      <TabBottom.Screen name="Life Style" component={Home} />
    </TabBottom.Navigator >
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  iconStyle:{
    marginTop: 8,
    alignItems:'center'
  },
  labelStyle:{
    fontSize:12
  },
  iconImage:{
    height:28,
    width:28
  }

})
