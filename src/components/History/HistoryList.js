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

  const handlefavorite = (product) => {
    console.log(product, 'product');
    listData.push(product);
    alert('added to favorite');
    console.log(listData, 'listData');
  };

  const handledelete = async (product) => {
    const newData = AsyncStorage.removeItem('producHistory');
    return setNewArray(newData);
    alert("delete item")
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
