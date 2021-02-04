import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteItem from '../Favorite/FavoriteItem';

const FavoriteList = ({favorite}) => {
  const [savedFavoriteUpdate, setSavedFavoriteUpdate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(favorite, 'favoritedddddd');
  const DeleteFavorite = (item) => {
    // console.log(item, 'product');

    const UpdateFavorite = [...favorite];
    // console.log(UpdateFavorite, 'UpdateFavorite');
    if (UpdateFavorite !== null) {
      const index = UpdateFavorite.indexOf(item);
      //   console.log(index, 'index');
      if (index > -1) {
        UpdateFavorite.splice(index, 1);
        setSavedFavoriteUpdate(UpdateFavorite);
      }
      //   console.log(UpdateFavorite, 'UpdateFavorijjjjjjte');
      console.log(savedFavoriteUpdate, 'savedFavoriteUpdate');
    }
  };

  return savedFavoriteUpdate.map((item, index) => {
    return <FavoriteItem item={item} onPress={() => DeleteFavorite(item)} />;
  });
};
export default FavoriteList;
