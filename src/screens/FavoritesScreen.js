import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import FavoriteList from '../components/Favorite/FavoriteList';
import {ScrollView} from 'react-native-gesture-handler';
import {
  deleteFavoriteInStorage,
  getFavoritesFromStorage,
} from '../asyncStorage/index';

const FavoritesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedFavorites, setSavedFavorites] = useState([]);
  const deleteFavorite = async (id) => {
    const newFavoriteList = await deleteFavoriteInStorage(id, savedFavorites);
    setSavedFavorites(newFavoriteList);
  };

  const loadFavoritesFromStorage = async () => {
    const formattedFavoritesfromStorage = await getFavoritesFromStorage();
    setSavedFavorites(formattedFavoritesfromStorage);
    setIsLoading(false);
  };
  useEffect(() => {
    loadFavoritesFromStorage();
  }, []);

  return isLoading ? (
    <Text>encours de chargement</Text>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.containersafe}>
        {savedFavorites.length > 0 ? (
          <FavoriteList
            favorites={savedFavorites}
            deleteFavorite={deleteFavorite}
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
    alignItems: 'flex-start',
    marginTop: 20,
  },
  card: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: 120,
    flexDirection: 'row',
    marginBottom: 10,
  },

  nameProduct: {
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },

  brands: {
    color: 'grey',
  },
  nameandbrand: {
    height: '100%',
    width: 220,
  },
  nameandbrandcontainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 5,
  },
  ratingproduct: {
    backgroundColor: 'red',
  },
});

export default FavoritesScreen;
