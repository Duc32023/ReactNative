import React, { useState } from 'react';
import {
  View,
  Text,

  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert
  
} from 'react-native';

import { Icon } from 'react-native-vector-icons/Icon';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
const ForgetPassword = ()=> {

    const [email, setEmail] = useState('');
   
    const [emailError, setEmailError] = useState('');
   

    const handleLogin = () => {
        let valid = true;
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!email) {
          setEmailError('Bạn chưa nhập email');
          valid = false;
        } else if (!emailRegex.test(email)) {
          setEmailError('Email không đúng định dạng');
          valid = false;
        } else {
          setEmailError('');
        }
      
      
        if (valid) {
          console.log('Email:', email);
          Alert.alert('Thành công', 'Thành công!');
        }
      };
      
    


    return (
        
        <View style = {styles.container}>

       
            <Text style = {styles.text}>Reset your password</Text>
            <TextInput
                style = {styles.input}
                placeholder='Enter Email'
                placeholderTextColor = '#ccc'
                onChangeText={setEmail}
                value={email}
                left={<TextInput.Icon icon="email" />}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
           
             <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                                     <Text style={styles.loginBtnText}>Enter Reset Email</Text>
                                 </TouchableOpacity>
                    <TouchableOpacity style={styles.createBtn} onPress={handleLogin}>
                        <Text style={styles.registerBtnText}>Go back to login</Text>
                    </TouchableOpacity>
        </View>
);
};

export default ForgetPassword;
const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: '#fff',
},
logo :{
    width: 250,
    height: 150,
    left: 70,
    top: 50,
    marginTop: 50,
    marginBottom: 5,
},
text :{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 50,
},
input: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#000',
    borderWidth: 0.6,
    alignSelf: 'center',
},
loginBtn:{
    backgroundColor: '#fa6348',
    width: '90%',
    height: 40,
    marginLeft: 20,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
},
loginBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
},
createBtn: {
    marginTop: 20,
    alignSelf: 'center',
    padding:10,

    borderRadius: 10,   

},
registerBtnText:{
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0a87f5'
},
forgotBtnText:{
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0a87f5',
},
forgotBtn: {
    marginTop: 10,
    alignSelf: 'center',
    padding:10,
backgroundColor: '#fff',
    borderRadius: 10,
},
errorText: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 5
  },

});
