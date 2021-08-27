import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({
  label,
  placeholder,
  keyboardType,
  onChangeText,
  value,
  secureTextEntry,
}) => {
  const {InputGroup, InputLabel, InputItem} = InputStyle;
  return (
    <View style={InputGroup}>
      <Text style={InputLabel}>{label}</Text>
      <TextInput
        style={InputItem}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const InputStyle = StyleSheet.create({
  InputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.6,
    borderBottomWidth: 0.4,
    borderColor: 'black',
    /* marginVertical: 10, */
  },
  InputLabel: {
    width: 80,
    marginRight: 7,
    textAlign: 'left',
  },
  InputItem: {
    width: 175,
  },
});

export {Input};
