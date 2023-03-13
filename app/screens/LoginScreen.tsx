import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.loginImage}
          />
        </View>
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.loginFormContainer}>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
      </View>
      <View style={styles.loginButtonContainer}>
        <AppButton title="Login" />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {},
  logo: {
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginImage: {
    width: 240,
    height: 150,
  },
  loginTextContainer: {
    top: 60,
  },
  loginText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#000',
    marginHorizontal: 20,
  },
  loginFormContainer: {
    top: 90,
  },
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    width: '100%',
    paddingHorizontal: 20,
  },
});
