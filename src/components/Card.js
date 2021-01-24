import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import placeholder from '../assets/images/placeholder.jpg';

const Card = (props) => { 
    console.log('dsfsdfsdf card');
    return (
        <TouchableOpacity 
        onPress={()=>{
            props.navigation.navigate('WebView',{url: props.url})
        }}
    >
        <View style={styles.card}>
            <Image source={{uri:props.imageUrl}} style={{height:200, width:"100%", resizeMode:'cover'}}/>
            <View style={styles.cardContent}>
                <Text style={styles.headline}>{props.title}</Text>
                <Text style={styles.newsDetail}>{props.newsDetail}</Text>
               
                <Text style={styles.more}>read more...</Text>

               
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        marginBottom:10
       
    },
    cardContent:{
        margin:10
    },

    headline:{
       fontSize:16  
    },

    newsDetail:{
        fontSize:14,
        marginVertical:5,
        color:'grey'
    },
    more:{
        fontSize:13,
        textAlign:'right',
        borderColor: '#999',
        
    }
    
})
export default Card;