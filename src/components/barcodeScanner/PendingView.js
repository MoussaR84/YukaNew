import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const PendingView = () => (
  <View style={styles.bottomOverlay}>
    <Text>Waiting</Text>
  </View>
);
const styles = StyleSheet.create({
  bottomOverlay: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PendingView;
