import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import image from '../../assets/images/swiftpaylogo.png'
import Login from './Login'

const First = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image}>
            </Image>
            <Text style={styles.welcome}>
              Welcome to Convenience
            </Text>
            <Text style={styles.motto}>
              SwiftPay - Secure, Instant & Convenient
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default First

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 100,
    marginLeft: 100
  },
  welcome: {
    marginLeft: 60,
    marginTop: 40,
    fontSize: 24
  },
  motto: {
    paddingTop: 20,
    paddingLeft: 60,
    color: 'grey'
  },
  buttons: {
    paddingTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 35,
    width: 100
  },
  signupButton: {
    backgroundColor: '#D99147',
    padding: 20,
    borderRadius: 35,
    width: 100
  },
  loginText: {
    color: '#ffffff',
    paddingLeft: 10
  },
  signupText: {
    color: '#ffffff'
  }
})
