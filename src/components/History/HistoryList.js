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
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateHistory, setUpdateHistory] = useState([]);

  const Handlefavorite = async (product) => {
    console.log(product, 'product');
    let newFavorite = [];

    const NewHandleFavorite = await AsyncStorage.getItem('productHistory');

    newFavorite = JSON.parse(NewHandleFavorite);

    console.log(newFavorite, 'newFavorite');

    if (product !== null) {
      favorite.push(newFavorite);
      setFavorite(newFavorite);
    }
    console.log(newFavorite, 'newFavoritekkkkkkkk');
  };

  // const UpdateHistory = async (product) => {
  //   let newHistory = [];

  //   let NewUpdateHistory = await AsyncStorage.getItem('productHistory');
  //   NewUpdateHistory = JSON.parse(newHistory);
  //   console.log('NewUpdateHistory', NewUpdateHistory);
  //   // if (product === 1) {
  //   //   updateHistory.filter(NewUpdateHistory);
  //   //   setUpdateHistory(NewUpdateHistory);
  //   // }
  //   console.log(NewUpdateHistory, 'NewUpdateHistory');

  //   console.log(favorite, 'favorite');
  // };

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
