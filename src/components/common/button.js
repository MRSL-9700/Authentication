import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const Buton = ({title, onPress}) => {
  return (
    <View style={btn.ButtonStyle}>
      <Button color="rgba(255,0,0,0.7)" onPress={onPress} title={title} />
    </View>
  );
};

const btn = StyleSheet.create({
  ButtonStyle: {
    width: '75%',
    borderRadius: 20,
    height: 'auto',
    margin: 15,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});

export {Buton};
