import React, {useState} from 'react';
import HistoryItem from './HistoryItem';
import {SwipeListView} from 'react-native-swipe-list-view';
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
import {TouchableHighlight} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const HistoryList = ({history}) => {
  const [listData, setListData] = useState([]);

  const handlefavorite = async (product) => {
    // console.log(product, 'product');
    const HandlefavoriteProduct = await AsyncStorage.getItem('favoriteproduct');
    const TransformHandleFavoriteProduct = JSON.parse(HandlefavoriteProduct);
    const newData = [...TransformHandleFavoriteProduct];
    newData.push(product);
    setListData(newData);

    AsyncStorage.setItem('favoriteproduct', JSON.stringify(listData));
  };
  return (
    history &&
    history.map((product) => {
      return (
        <HistoryItem
          product={product}
          onPress={() => handlefavorite(product)}
        />
      );
    })
  );
};
export default HistoryList;
