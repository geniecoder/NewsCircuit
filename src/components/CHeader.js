import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const CHeader = (props) => (
    <SafeAreaView style={{backgroundColor: 'red'}}>
         <View style={styles.container}>
        <Text style={styles.hText}>{props.Tname}</Text>
    </View>

    </SafeAreaView>
   
);

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent:'center'
       },
    hText:{
        fontSize: 17,
        fontWeight: 'bold',
        width: 100,
        color: 'white',
        marginTop:5,
        textAlign:'center'
    

        
    }
})

export default CHeader;
