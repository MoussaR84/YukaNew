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
import HistoryList from '../components/History/HistoryList';
import HistoryItem from '../components/History/HistoryItem';

const FavoritesScreen = ({listData}) => {
  console.log(listData, 'liffffshdhzhzudhtData');

  return (
    <View style={styles.container}>
      <Text>favoritescreentttt</Text>
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
