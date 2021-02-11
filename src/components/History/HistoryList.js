import React, {useState} from 'react';
import HistoryItem from './HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';

const HistoryList = ({history}) => {
  const [favorite, setFavorite] = useState([]);
  const handlefavorite = (product) => {
    // console.log(product, 'product');
    // console.log(favorite, 'favorite');
    // console.log(history, 'history');
    if (favorite.indexOf(product) === -1) {
      favorite.push(product);
    } else if (history.indexOf(product) > -1) {
      console.log(product + ' existe déjà dans le tableau.');
    }
    console.log(favorite, 'favoriteproduct');
  };

  return (
    history &&
    history.map((product, index) => {
      return (
        <HistoryItem
          key={index}
          product={product}
          onPress={() => handlefavorite(product)}
        />
      );
    })
  );
};
export default HistoryList;
