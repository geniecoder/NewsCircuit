import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        };

    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
   
    handleLogin = (emailId, pass) => {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text style={{ marginTop: 40, color: 'red', alignSelf: 'center' }}>LOGIN</Text>
                </View>
                <View style={{ margin:20}}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor="red"

                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />

                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="red"
                        autoCapitalize="none"
                        onChangeText={this.handlePassword} />

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => login(this.state.email, this.state.password)
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default Login;
const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent:'center',
        alignItems:'stretch'



    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
        padding: 10

    },
    submitButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 15,
        height: 40,


    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    }
})