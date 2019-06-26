import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import image from '../../assets/images/swiftpaylogo.png'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Login = ({navigation}) => {
   return(
     <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View>
           <Image source={image} style={styles.image}>
           </Image>
           <Text style={styles.welcomeText}>
             Please Log in  to  Continue
           </Text>
           <TextInput style={styles.usernameInput}
           placeholder = "Username/Email"
           underlineColorAndroid = "transparent"
           autoCapitalize = "none"
           placeholderTextColor = "gray"
           />
           <TextInput style={styles.passwordInput}
           placeholder = "Password"
           underColorAndroid = "transparent"
           autoCapitalize = "none"
           placeholderTextColor = "gray"
           />
           <View style={styles.buttons}>
             <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
               <Text style={styles.loginText}>LOGIN</Text>
             </TouchableOpacity>
           </View>
         </View>
       </KeyboardAvoidingView>
    </DismissKeyboard>
   )
 }

 export default Login

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   image: {
     width: 200,
     height: 200,
     marginTop: 40,
     marginLeft: 100
   },
   welcomeText: {
     marginTop: 20,
     marginBottom: 20,
     fontSize: 16,
     textAlign: 'center'
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
     marginTop: -40
   },
   loginText: {
     color: '#ffffff',
     textAlign: 'center'
   },
   usernameInput: {
     backgroundColor: 'white',
     padding: 10,
     margin: 10,
     borderRadius: 2,
     fontSize: 12,
     width: 300,
     marginTop: 10,
     paddingTop: 10,
     marginLeft: 50,
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
     marginTop: 10,
     paddingTop: 10,
     marginLeft: 50,
     borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 5
   }
 })
