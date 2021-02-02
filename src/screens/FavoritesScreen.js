import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ratings from '../components/Product/Rating';
import ImageCard from '../components/Product/ImageCard';
import HistoryList from '../components/History/HistoryList';
import HistoryItem from '../components/History/HistoryItem';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const FavoritesScreen = ({newFavorite, listData}) => {
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
  // console.log(listData, 'listData');
  // let newTabFavorite = [];
  // newTabFavorite = await AsyncStorage.getItem('productFavorite');
  // console.log(newTabFavorite, 'newTabFavorite');

  // const newTabFavoriteParse = JSON.parse(newTabFavorite);
  // console.log(newTabFavoriteParse, 'newTabFavoriteParse');
  console.log(savedFavorite, 'savedFavorite');

  return isLoading ? (
    <>
      <View style={styles.container}>
        <Text>favoritescreengg</Text>
      </View>
    </>
  ) : (
    <>
      <View style={styles.container}>
        {savedFavorite.map((item, i) => (
          <>
            <SafeAreaView>
              <ScrollView>
                <TouchableOpacity style={styles.card}>
                  <ImageCard image_url={item.image_url} />
                  {/* <Image style={styles.cardImage} source={{uri: product.image_url}} /> */}
                  <View style={styles.cardRightBlock}>
                    <View style={styles.titleAndBrand}>
                      <Text numberOfLines={1} style={styles.productTitle}>
                        {item.product_name}
                      </Text>
                      <Text style={styles.productItem}>{item.brands}</Text>
                    </View>
                    <View style={styles.whatandwhen}>
                      <Ratings nutrition_grade_fr={item.nutrition_grade_fr} />
                      <View style={styles.horizontalLine}>
                        <FontAwesome
                          name="clock-o"
                          size={14}
                          style={styles.productIcon}
                          color={colors.greyText}
                        />
                        <Text style={styles.productItem}>
                          Il y a quelques jours
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          </>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    borderBottomColor: colors.greyLightLine,
    borderBottomWidth: 1,
    // fontFamily: 'Roboto-Light',
    paddingVertical: 20,
    paddingHorizontal: 15,
    // backgroundColor: 'green',
  },
  cardRightBlock: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15,
    height: 80,
  },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productTitle: {
    fontFamily: 'Roboto-Light',
    color: colors.greyProductTitle,
    fontWeight: '900',
    fontSize: 15,
  },

  productItem: {
    fontFamily: 'Roboto-Light',
    color: colors.greyText,
    fontWeight: '900',
    fontSize: 12,
  },
  productIcon: {
    paddingRight: 5,
  },
  whatandwhen: {
    paddingBottom: 3,
    height: 40,
  },
});
export default FavoritesScreen;
