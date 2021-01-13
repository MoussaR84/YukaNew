import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PendingView = () => {
  return (
    <LottieView
      source={require('../../assets/food-animation.json')}
      autoPlay
      loop
    />
  );
};
export default PendingView;
