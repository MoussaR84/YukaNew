import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableHighlight,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HistoryList from '../components/History/HistoryList';
import Product from '../components/Product';
import {
  ratingProduct,
  ratingProductComment,
} from '../components/Product/productParser';

const HistoryScreen = ({listData}) => {
  const [savedHistory, setSavedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getHistoryFromStorage = async () => {
      let formattedHistoryfromStorage = [];
      const rawSavedHistory = await AsyncStorage.getItem('productHistory');
      if (rawSavedHistory !== null) {
        formattedHistoryfromStorage = JSON.parse(rawSavedHistory);
      }
      setSavedHistory(formattedHistoryfromStorage);
      setIsLoading(false);
    };
    getHistoryFromStorage();
  }, []);
  console.log('savedHisttttttfffftdygzygadggdaygttttory', savedHistory);
  console.log('listDatauuuuuuuuu', listData);
  return isLoading ? (
    <Text>encours de chargement</Text>
  ) : (
    <ScrollView>
      <SafeAreaView style={styles.containersafe}>
        <HistoryList history={savedHistory} favorite={listData} />
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

export default HistoryScreen;
