import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function Button({title}: any) {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 20,
    width: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
export default Button;
