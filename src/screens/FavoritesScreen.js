import React, {useState, UseEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import HistoryList from '../components/History/HistoryList';
import HistoryItem from '../components/History/HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';
import {useEffect} from 'react';

const FavoritesScreen = ({newFavorite, listData}) => {
  const [isLoading, setIsLoading] = useState(true);

  console.log(newFavorite, 'newFavorite');
  console.log(listData, 'listData');

  return isLoading ? (
    <>
      <View style={styles.container}>
        <Text>favoritescreengg</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.container}>
        <Text>salut</Text>
        {newFavorite.map((product, index) => (
          <Text>{product.product_name}</Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
