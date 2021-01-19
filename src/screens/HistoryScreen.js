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
import Yukahome from '../assets/Icon/iconcatogorie/yukahomepage.jpg';
import {SwipeListView} from 'react-native-swipe-list-view';
import Product from '../components/Product';
import {
  ratingProduct,
  ratingProductComment,
} from '../components/Product/productParser';

const HistoryScreen = (product) => {
  const [savedHistory, setSavedHistory] = useState([]);

  useEffect(() => {
    const getHistoryFromStorage = async () => {
      const rawSavedHistory = await AsyncStorage.getItem('productHistory');
      const savedHistoryinStorage = JSON.parse(rawSavedHistory);
      setSavedHistory(savedHistoryinStorage);
      // setIsLoading(false);
    };
    getHistoryFromStorage();
  }, []);
  console.log(savedHistory, 'savedHisttttttfffftttttory');

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          {savedHistory.map((item, index) => {
            return (
              <View style={styles.card}>
                <Image
                  style={{height: 100, width: 80, borderRadius: 10}}
                  source={{uri: item.image_url}}
                />
                <View style={styles.nameandbrandcontainer}>
                  <View style={styles.nameandbrand}>
                    <Text style={styles.nameProduct}>{item.product_name}</Text>
                    <Text style={styles.brands}>{item.brands}</Text>
                    {/* <View style={styles.ratingproduct}>{ratingProduct(product)}</View>
                    <View style={styles.ratingproductcomment}>
                      {ratingProductComment(product)}
                    </View> */}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
