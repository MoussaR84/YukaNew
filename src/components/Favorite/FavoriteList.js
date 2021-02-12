import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteItem from '../Favorite/FavoriteItem';

const FavoriteList = ({favorites, deleteFavorite}) => {
  // const [savedFavoriteUpdate, setSavedFavoriteUpdate] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  console.log(favorites, 'favorites');

  return (
    favorites &&
    favorites.map((product, index) => {
      return (
        <FavoriteItem
          key={index}
          product={product}
          onPress={() => deleteFavorite(product.id)}
        />
      );
    })
  );
};
export default FavoriteList;
