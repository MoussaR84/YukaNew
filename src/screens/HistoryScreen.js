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

const HistoryScreen = () => {
  const [savedHistory, setSavedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getHistoryFromStorage = async () => {
      const rawSavedHistory = await AsyncStorage.getItem('productHistory');
      const savedHistoryinStorage = JSON.parse(rawSavedHistory);
      setSavedHistory(savedHistoryinStorage);
      // setIsLoading(false);
    };
  }, []);

  return isLoading ? <Text>suhasuhashauh</Text> : <HistoryList />;
};

export default HistoryScreen;
