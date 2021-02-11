import React, {useState} from 'react';
import HistoryItem from './HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';
import ProductSugar from '../Product/ProductSugar';

const HistoryList = ({history, setFavorites, favorites}) => {
  const addToFavorites = async (product) => {
    const ProductAlreadyAddedInFav = history.find(({id}) => {
      console.log('id', id, 'id product', product.id);
      return id === product.id;
    });

    if (ProductAlreadyAddedInFav !== undefined) {
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
