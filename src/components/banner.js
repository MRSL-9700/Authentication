import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//import {name as appName} from 'app.json';

class Banner extends Component {
  render() {
    const {bannerWrapper, bannerText} = banner;
    return (
      <View style={bannerWrapper}>
        <Text style={bannerText}>{this.props.header}</Text>
      </View>
    );
  }
}

const banner = StyleSheet.create({
  bannerWrapper: {
    width: 'auto',
    height: 225,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.7)',
  },
  bannerText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default Banner;
