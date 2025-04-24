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

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native';
const Login = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
    
      if (!password) {
        setPasswordError('Bạn chưa nhập password');
        valid = false;
      } else {
        setPasswordError('');
      }
    
      if (valid) {
        console.log('Email:', email);
        console.log('Password:', password);
        Alert.alert('Thành công', 'Đăng nhập thành công!');
      }
    };
    
    const handleForgotPassword = () => {
      console.log('Chuyển đến màn hình quên mật khẩu');
    };
    
    const handleCreateAccount = () => {
      console.log('Chuyển đến màn hình đăng ký');
    };


    return (
        
        <View style = {styles.container}>

        <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
          style={styles.logo}
          resizeMode="contain"
        />  
            <Text style = {styles.text}>Welcome Back</Text>
            <TextInput
                style = {styles.input}
                placeholder='Enter Email'
                placeholderTextColor = '#ccc'
                onChangeText={setEmail}
                value={email}
                left={<TextInput.Icon icon="email" />}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TextInput
      style={styles.input}
      placeholder="Enter password"
      placeholderTextColor="#ccc"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={!showPassword}
      left={<TextInput.Icon icon="key" />}
      right={
        <TextInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => setShowPassword(!showPassword)}
        />
      }
    />
             {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createBtn} onPress={handleLogin}>
            <Text style={styles.registerBtnText}>Create a new account ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotBtn} onPress={handleLogin}>
            <Text style={styles.forgotBtnText}>Forgot password</Text>
        </TouchableOpacity>
            
        </View>
);
};

export default Login;
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
