import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import FavoriteList from '../components/Favorite/FavoriteList';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const FavoritesScreen = ({listData}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [savedFavorite, setSavedFavorite] = useState([]);

  useEffect(() => {
    const getFavoriteFromStorage = async () => {
      let newTabFavorite = [];
      const newFavoriteData = await AsyncStorage.getItem('productFavorite');
      if (newFavoriteData !== null) {
        newTabFavorite = JSON.parse(newFavoriteData);
      }
      setSavedFavorite(newTabFavorite);
      setIsLoading(false);
    };
    getFavoriteFromStorage();
  }, []);
  console.log(savedFavorite, 'savedFavorite');

  return isLoading ? (
    <Text>encours de chargement</Text>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.containersafe}>
        <FavoriteList favorite={savedFavorite} listData={listData} />
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
