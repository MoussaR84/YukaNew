import React from 'react';
import HistoryItem from './HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';

const HistoryList = ({history, setFavorites, favorites}) => {
  const addToFavorites = async (product) => {
    const productAlreadyAddedInFav = favorites.find(({id}) => {
      return id === product.id;
    });
    if (productAlreadyAddedInFav !== undefined) {
      return;
    } else {
      const newFavorites = [product, ...favorites];
      await AsyncStorage.setItem(
        'productFavorites',
        JSON.stringify(newFavorites),
      );

      setFavorites(newFavorites);
    }
  };

  return (
    history &&
    history.map((product, index) => {
      return (
        <HistoryItem
          key={index}
          product={product}
          onPress={() => addToFavorites(product)}
        />
      );
    })
  );
};
export default HistoryList;
