import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import placeholder from '../assets/images/placeholder.jpg';




const Details = ({ route, navigation }) => {

  const { item } = route.params;
  console.log(`data: ${JSON.stringify(item)}`);


  useEffect(() => {
  // Your code here
  }, []);
  return (

    <View style={styles.card}>
      <Image style={{height:200, width:"100%", resizeMode:'cover'}} source={{uri:item.urlToImage}}/>
      <View style={styles.cardContent}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.newsDetail}>{item.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginBottom: 10

  },
  cardContent: {
    margin: 10
  },

  headline: {
    fontSize: 16
  },

  newsDetail: {
    fontSize: 14,
    marginVertical: 5,
    color: 'grey'
  }


})
export default Details;
