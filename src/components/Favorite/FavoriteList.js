import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteItem from '../Favorite/FavoriteItem';

const FavoriteList = ({favorites, deleteFavorite}) => {
  console.log(favorites, 'favorites');
  return (
    favorites &&
    favorites.map((favorite, index) => {
      return (
        <FavoriteItem
          key={index}
          favorite={favorite}
          onPress={() => deleteFavorite(favorite.id)}
        />
      );
    })
  );
};
export default FavoriteList;
