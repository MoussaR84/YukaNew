import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import HistoryList from '../components/History/HistoryList';
import {
  getHistoryFromStorage,
  getFavoritesFromStorage,
} from '../asyncStorage/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  loadHistory,
  isHistoryLoading,
} from '../store/actions/history/actionCreators';
import {
  loadFavorites,
  addToFavorites as addToFavoritesToRedux,
} from '../store/actions/favorites/actionCreators';

import {isProductAlreadyinFavorites} from '../utilis/index';

const HistoryScreen = (props) => {
  const loadAllData = async () => {
    const loadedFavoritesFromStorage = await getFavoritesFromStorage();
    const loadedHistoryfromStorage = await getHistoryFromStorage();

    const formattedHistory = isProductAlreadyinFavorites(
      loadedHistoryfromStorage,
      loadedFavoritesFromStorage,
    );
    dispatch(loadHistory(formattedHistory));
    dispatch(loadFavorites(loadedFavoritesFromStorage));
    dispatch(isHistoryLoading(false));
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const historyList = useSelector((state) => state.history.list);
  const favoriteList = useSelector((state) => state.favorite.list);
  const isLoading = useSelector((state) => state.history.isLoading);
  const dispatch = useDispatch();

  return isLoading ? (
    <SafeAreaView style={styles.container}>
      <Text style={styles.load}>en cours de chargement</Text>
      <ActivityIndicator />
    </SafeAreaView>
  ) : (
    <ScrollView>
      <HistoryList
        history={historyList}
        favorites={favoriteList}
        dispatch={dispatch}
        addFavoritestoRedux={addToFavoritesToRedux}
      />
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

export default HistoryScreen;
