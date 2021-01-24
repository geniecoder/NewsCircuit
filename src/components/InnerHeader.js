import React from 'react';
import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native';

const InnerHeader = (props) => {

    return (
        
            <View style={styles.container}>
                <TouchableOpacity
                onPress={()=>{
                    props.navigation.goBack()}}
                >
                <Text style={styles.HIcon}>Back</Text>
                </TouchableOpacity>
                
            </View>
       

    )
}

const styles= StyleSheet.create({
    container:{
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'red'
        },
    HIcon:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color:'white'
    }
})

export default InnerHeader;