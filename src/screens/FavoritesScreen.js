import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import FavoriteList from '../components/Favorite/FavoriteList';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const FavoritesScreen = ({favorites}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedFavorites, setSavedFavorites] = useState([]);
  const deleteFavorite = async (id) => {
    const newFavoriteList = savedFavorites.filter((favorite) => {
      return favorite.id !== id;
    });
    if (newFavoriteList.length === 0) {
      await AsyncStorage.removeItem('productFavorites');
    } else {
      await AsyncStorage.setItem(
        'productFavorites',
        JSON.stringify(newFavoriteList),
      );
    }
    setSavedFavorites(newFavoriteList);
  };

  const getFavoriteFromStorage = async () => {
    let formattedFavoritesfromStorage = [];
    const rawSavedFavorites = await AsyncStorage.getItem('productFavorites');
    if (rawSavedFavorites !== null) {
      formattedFavoritesfromStorage = JSON.parse(rawSavedFavorites);
    }
    setSavedFavorites(formattedFavoritesfromStorage);
    setIsLoading(false);
  };
  useEffect(() => {
    getFavoriteFromStorage();
  }, []);

  console.log(savedFavorites, 'savedFavoritesllllll');

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
