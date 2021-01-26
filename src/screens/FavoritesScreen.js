import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ratings from '../components/Product/Rating';
import ImageCard from '../components/Product/ImageCard';
import Product from '../components/Product';
import {
  ratingProduct,
  ratingProductComment,
} from '../components/Product/productParser';
import AsyncStorage from '@react-native-community/async-storage';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableHighlight} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteScreen = ({product}) => {
  const [savedHistory, setSavedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState(
    savedHistory.map((product, index) => ({
      key: `${index}`,
      product_name: product.product_name,
      brands: product.brands,
      image_url: product.image_url,
      nutrition_grade_fr: product.nutrition_grade_fr,
    })),
  );
  useEffect(() => {
    const getHistoryFromStorage = async () => {
      let formattedHistoryfromStorage = [];
      const rawSavedHistory = await AsyncStorage.getItem('productHistory');
      if (rawSavedHistory !== null) {
        formattedHistoryfromStorage = JSON.parse(rawSavedHistory);
      }
      setSavedHistory(formattedHistoryfromStorage);
      setIsLoading(false);
      setListData(formattedHistoryfromStorage);
    };
    getHistoryFromStorage();
  }, []);
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...savedHistory];
    const prevIndex = newData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
    console.log(rowMap,"rowMap");
    console.log(rowKey,"rowKey");
  };

  console.log(savedHistory, 'savedHistorhuhhuhuhhhuhytttuuuutttgtgtgtgtgt');

  const VisibleItem = (props) => {
    const {data} = props;
    console.log(props, 'props');

    return (
      <SafeAreaView>
        <View style={styles.card}>
          <TouchableOpacity style={styles.rowFrontVisible}>
            <ImageCard image_url={data.item.image_url} />
            {/* <Image style={styles.cardImage} source={{uri: product.image_url}} /> */}
            <View style={styles.cardRightBlock}>
              <View style={styles.titleAndBrand}>
                <Text numberOfLines={1} style={styles.productTitle}>
                  {data.item.product_name}
                </Text>
                <Text style={styles.productItem}>{data.item.brands}</Text>
              </View>
              <View style={styles.whatandwhen}>
                <Ratings nutrition_grade_fr={data.item.nutrition_grade_fr} />
                <View style={styles.horizontalLine}>
                  <FontAwesome
                    name="clock-o"
                    size={14}
                    style={styles.productIcon}
                    color={colors.greyText}
                  />

                  <Text style={styles.productItem}>Il y a quelques jours</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };

  const HiddenItemWithActions = (props) => {
    const {onClose, onDelete, swipeAnimatedValue} = props;
    return (
      <>
        <StatusBar view={styles.statusbar}/>
        <View style={styles.rowBack}>
          <Text>Left</Text>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={onClose}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={25}
              style={styles.trash}
              color="grey"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={onDelete}>
            <Animated.View
              style={[
                styles.trash,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={25}
                color="grey"
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDeleteRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 90,
    margin: 5,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#fff',
    right: 75,
    height: 90,
  },
  backRightBtnRight: {
    backgroundColor: '#fff',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 90,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  cardRightBlock: {
    justifyContent: 'space-around',
    marginLeft: 65,
    height: 80,
    position: 'absolute',
  },
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
