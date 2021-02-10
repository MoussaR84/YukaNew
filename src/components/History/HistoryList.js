import React, {useState} from 'react';
import HistoryItem from './HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';

const HistoryList = ({history}) => {
  const [listData, setListData] = useState([]);
  const handlefavorite = (product) => {
    console.log(product, 'product');
    console.log(listData, 'listData');

    if (product !== null) {
      listData.push(product);
      AsyncStorage.setItem('productFavorite', JSON.stringify(listData));
    }
  };

  return (
    history &&
    history.map((product, index) => {
      return (
        <HistoryItem
          product={product}
          onPress={() => handlefavorite(product, index)}
        />
      );
    })
  );
};
export default HistoryList;
