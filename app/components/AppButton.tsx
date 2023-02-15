import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function Button({title}: any) {
  return (
    <TouchableOpacity>
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 60,
    backgroundColor: colors.primary,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
color: '#fff',
fontSize: 18,

  },
});
export default Button;
