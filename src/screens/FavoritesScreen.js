import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import FavoriteList from '../components/Favorite/FavoriteList';
import {ScrollView} from 'react-native-gesture-handler';

import {
  loadFavorites,
  deleteFavorites as deleteFavoritesToRedux,
  isFavoritesLoading,
} from '../store/actions/favorites/actionCreators';
import {useSelector, useDispatch} from 'react-redux';

const FavoritesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [savedFavorites, setSavedFavorites] = useState([]);
  // const deleteFavorites = async (id) => {
  //   const newFavoriteList = await deleteFavoriteInStorage(id, favoriteList);
  //   dispatch(deleteFavoritesToRedux(newFavoriteList));
  //   // setSavedFavorites(newFavoriteList);
  // };

  // const loadFavoritesFromStorage = async () => {
  //   const formattedFavoritesfromStorage = await getFavoritesFromStorage();
  //   setSavedFavorites(formattedFavoritesfromStorage);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   loadFavoritesFromStorage();
  // }, []);

  const favoriteList = useSelector((state) => state.favorite.list);
  console.log('favoriteList screen,', favoriteList);
  const dispatch = useDispatch();

  return isLoading ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.load}>en cours de chargement</Text>
      <ActivityIndicator />
    </SafeAreaView>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.containersafe}>
        {favoriteList.length > 0 ? (
          <FavoriteList
            favorites={favoriteList}
            dispatch={dispatch}
            deleteFavoritesToRedux={deleteFavoritesToRedux}
          />
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FavoritesScreen;
