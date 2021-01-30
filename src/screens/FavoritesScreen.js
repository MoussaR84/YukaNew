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

const FavoritesScreen = ({listData}) => {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FavoriteProductHistory = async () => {
    const FavoriteHistory = await AsyncStorage.getItem('favoriteproduct');
    console.log(FavoriteHistory, 'liffffshdhzhzudhtData');
    setFavorite(JSON.parse(FavoriteHistory));
    setIsLoading(false);
  };
  useEffect(() => {
    FavoriteProductHistory();
  }, []);

  return isLoading ? (
    <>
      <View style={styles.container}>
        <Text>favoritescreengg</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.container}>
        {favorite.map((element, index) => (
          <Text>{element.product_name}</Text>
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
