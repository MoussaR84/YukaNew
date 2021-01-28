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

const FavoritesScreen = ({favorite}) => {
  console.log(favorite, 'favorite');

  return (
    // favorite&&
    // favorite.map((HistoryItem,index)=>({
    //   return(
    //        key: `${index}`,
    //         product_name: HistoryItem.product_name,
    //         brands: HistoryItem.brands,
    //         image_url: HistoryItem.image_url,
    //         nutrition_grade_fr: HistoryItem.nutrition_grade_fr,
    //   )}))
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
