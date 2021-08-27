import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={style.Spinner}>
      <ActivityIndicator size="large" color="#FF0000" />
    </View>
  );
};

const style = StyleSheet.create({
  Spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    /* borderWidth: 1,
    borderColor: 'black', */
  },
});

export {Spinner};
