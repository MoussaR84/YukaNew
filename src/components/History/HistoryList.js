import React, {useState} from 'react';
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
import {TouchableHighlight} from 'react-native-gesture-handler';

const HistoryList = ({history}) => {
  const [listData, setListData] = useState([]);

  const handlefavorite = (product) => {
    console.log(product, 'product');
    listData.push(product);
    console.log(listData, 'listData');
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
