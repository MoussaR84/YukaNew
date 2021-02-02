import React, {useState, useEffect} from 'react';
import HistoryItem from './HistoryItem';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HistoryList = ({history}) => {
  const [listData, setlistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateHistory, setUpdateHistory] = useState([]);
  const Handlefavorite = async (product) => {
    console.log(product, 'product');

    const NewHandleFavorite = await AsyncStorage.getItem('productHistory');
    let newFavorite = [];
    newFavorite = JSON.parse(NewHandleFavorite);
    console.log(newFavorite, 'newFavorite');

    if (product !== null) {
      listData.push(newFavorite);
      console.log(newFavorite, 'newFavoritekkkkkkkk');
      AsyncStorage.setItem('productFavorite', JSON.stringify(newFavorite));
      console.log(newFavorite, 'newFavoritelllllllllll');
    }
  };

  return (
    history &&
    history.map((product) => {
      return (
        <HistoryItem
          product={product}
          onPress={() => Handlefavorite(product)}
        />
      );
    })
  );
};
export default HistoryList;
