import React, { Component } from 'react'
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import imageBackground from '../../../assets/images/background.png'
import Dashboard from './Dashboard'
import Login from './Login'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Signup = ({navigation}) => {
   return(
     <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" enabled>
           <ImageBackground source={imageBackground}
           style={styles.imageBackground}>
             <Text style={styles.welcomeText}>
               Akwaaba
             </Text>
             <TextInput style={styles.input}
             placeholder = "fullname"
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.input}
             placeholder = "E-mail"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.input}
             placeholder = "Phone number"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.passwordInput}
             placeholder = "Password"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.passwordInput}
             placeholder = "Confirm Password"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <View style={styles.buttons}>
               <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                 <Text style={styles.loginText}>LOGIN</Text>
               </TouchableOpacity>
             </View>
         </ImageBackground>
       </KeyboardAvoidingView>
    </DismissKeyboard>
   )
 }

 export default Signup

 const styles = StyleSheet.create({
   welcomeText: {
     color: 'red',
     fontSize: 20,
     marginRight: 40,
     marginTop: 120
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
     width: 200,
     alignItems: 'center',
     position: 'relative',
     bottom: 60
   },
   loginText: {
     color: '#ffffff',
     textAlign: 'center'
   },
   input: {
     backgroundColor: 'white',
     padding: 10,
     margin: 10,
     borderRadius: 2,
     fontSize: 12,
     width: 300,
     marginTop: 5,
     paddingTop: 20,
     marginLeft: 20,
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 5
   },
   passwordInput: {
     backgroundColor: 'white',
     padding: 10,
     margin: 10,
     borderRadius: 2,
     fontSize: 12,
     width: 300,
     marginTop: 5,
     paddingTop: 20,
     marginLeft: 20,
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 5
   },
   imageBackground: {
     width: '100%',
     height: '100%',
     alignItems: 'center'
   }
 })
