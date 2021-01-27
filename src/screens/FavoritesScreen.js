import React, {useState, UseEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const FavoritesScreen = (handlefavorite) => {
  console.log(listData);
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
