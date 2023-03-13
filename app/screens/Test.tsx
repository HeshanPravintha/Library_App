import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Platform
} from 'react-native';
import AppTextInput from '../components/AppTextInput';

function Test() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Email" />

      </ScrollView>
    </KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 10,
    // justifyContent: 'flex-end',
    backgroundColor: '#0086f4',
  },
  textInput: {
    backgroundColor: '#eee',
    marginHorizontal: 20,
    marginVertical: 80
  },
});
export default Test;
