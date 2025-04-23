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
const Register = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

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
    
      if (!confirmPassword) {
        setConfirmPasswordError('Bạn chưa xác nhận password');
        valid = false;
      } else if (password !== confirmPassword) {
        setConfirmPasswordError('Mật khẩu xác nhận không khớp');
        valid = false;
      } else {
        setConfirmPasswordError('');
      }
    
      // Chỉ báo thành công nếu tất cả hợp lệ
      if (valid) {
        console.log('Email:', email);
        console.log('Password:', password);
        Alert.alert('Thành công', 'Đăng kí thành công!');
      }
    };
    
    
    


    return (
        
        <View style = {styles.container}>

       
            <Text style = {styles.text}>Create a new account!</Text>
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
             
      
             <TextInput
  style={styles.input}
  placeholder="Confirm password"
  placeholderTextColor="#ccc"
  value={confirmPassword}
  onChangeText={setConfirmPassword}
  secureTextEntry={!showConfirmPassword}
  left={<TextInput.Icon icon="key" />}
  right={
    <TextInput.Icon
      icon={showConfirmPassword ? 'eye-off' : 'eye'}
      onPress={() => setShowConfirmPassword(!showConfirmPassword)}
    />
  }
/>
{confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

           
              <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                         <Text style={styles.loginBtnText}>Signup</Text>
                     </TouchableOpacity>
        <TouchableOpacity style={styles.createBtn} onPress={handleLogin}>
            <Text style={styles.registerBtnText}>Already have an account?</Text>
        </TouchableOpacity>

       
            
        </View>
);
};

export default Register;
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
