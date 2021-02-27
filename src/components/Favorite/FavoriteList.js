import React from 'react';
import FavoriteItem from '../Favorite/FavoriteItem';
import {deleteFavoriteInStorage} from '../../asyncStorage/index';

const FavoriteList = ({favorites, dispatch, deleteFavoritesToRedux}) => {
  const deleteFavorites = async (id) => {
    const newFavoriteList = await deleteFavoriteInStorage(id, favorites);
    dispatch(deleteFavoritesToRedux(newFavoriteList));
  };
  console.log(favorites, 'favorites');
  return (
    favorites &&
    favorites.map((favorite, index) => {
      return (
        <FavoriteItem
          key={index}
          favorite={favorite}
          onPress={() => deleteFavorites(favorite.id)}
        />
      );
    })
  );
};
export default FavoriteList;
