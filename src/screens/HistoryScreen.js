import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HistoryList from '../components/History/HistoryList';
// import fakeData from '../data/fakeData.json';

const HistoryScreen = (props) => {
  const [savedHistory, setSavedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const getFavoritesFromStorage = async () => {
    let formattedFavoritesfromStorage = [];
    const rawSavedFavorites = await AsyncStorage.getItem('productFavorites');
    if (rawSavedFavorites !== null) {
      formattedFavoritesfromStorage = JSON.parse(rawSavedFavorites);
    }
    setFavorites(formattedFavoritesfromStorage);
  };

  const getHistoryFromStorage = async () => {
    let formattedHistoryfromStorage = [];
    const rawSavedHistory = await AsyncStorage.getItem('productHistory');
    if (rawSavedHistory !== null) {
      console.log(rawSavedHistory, 'rawSavedHistory');
      formattedHistoryfromStorage = JSON.parse(rawSavedHistory);
    }
    setSavedHistory(formattedHistoryfromStorage);
    setIsLoading(false);
  };
  useEffect(() => {
    getHistoryFromStorage();
    getFavoritesFromStorage();
  }, []);

  // const getFakeData = () => {
  //   setSavedHistory(fakeData);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getFakeData();
  // }, []);
  return isLoading ? (
    <Text style={styles.load}>encours de chargement</Text>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.containersafe}>
        <HistoryList
          history={savedHistory}
          favorites={favorites}
          setFavorites={setFavorites}
        />
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
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default HistoryScreen;
