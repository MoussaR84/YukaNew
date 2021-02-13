import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteItem from '../Favorite/FavoriteItem';

const FavoriteList = ({favorites, deleteFavorite, history}) => {
  return (
    favorites &&
    favorites.map((item, index) => {
      return (
        <FavoriteItem
          key={index}
          item={item}
          onPress={() => deleteFavorite(item.id)}
        />
      );
    })
  );
};
export default FavoriteList;
