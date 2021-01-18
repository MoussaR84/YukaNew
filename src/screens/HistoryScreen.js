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
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HistoryList from '../components/History/HistoryList';
import Yukahome from '../assets/Icon/iconcatogorie/yukahomepage.jpg';

const HistoryScreen = () => {
  const [savedHistory, setSavedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getHistoryFromStorage = async () => {
      const rawSavedHistory = await AsyncStorage.getItem('productHistory');
      const savedHistoryinStorage = JSON.parse(rawSavedHistory);
      setSavedHistory(savedHistoryinStorage);
      setIsLoading(false);
    };
  }, []);

  return isLoading ? (
    <View style={styles.containerisLaoing}>
      <Text>produit screen</Text>
    </View>
  ) : (
    <HistoryList />
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  containerisLaoing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
