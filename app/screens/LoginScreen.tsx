import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.loginImage}
          />
        </View>
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View>
          <TextInput style={styles.emailTextinput} placeholder="Enter email" />
        </View>
        <View>
            <AppButton title="Login"/>
        </View>
      </View>
      
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    top: 30,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    width: 240,
    height: 150,
  },
  loginText: {
    top :20,
    fontSize: 34,
    fontWeight: '900',
    color: "#000",
    margin: 20
  },
  emailTextinput: {
    top :20,
    backgroundColor : "#E8E8E8",
    height: 60,
    margin: 20
  },
});
