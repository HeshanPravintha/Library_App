import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import colors from '../config/colors';

function AppTextInput({...otherProps}: any) {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor={colors.darkgrey} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 5,
    flexDirection: 'row',
    height: 60,
    marginVertical: 10,
    marginHorizontal: 20,
    // width: '100%'
    
  },
});
export default AppTextInput;
