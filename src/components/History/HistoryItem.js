import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ratings from '../Product/Rating';
import ImageCard from '../Product/ImageCard';

const HistoryItem = ({product}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.card}>
        <ImageCard image_url={product.image_url} />
        {/* <Image style={styles.cardImage} source={{uri: product.image_url}} /> */}
        <View style={styles.cardRightBlock}>
          <View style={styles.titleAndBrand}>
            <Text numberOfLines={1} style={styles.productTitle}>
              {product.product_name}
            </Text>
            <Text style={styles.productItem}>{product.brands}</Text>
          </View>
          <View style={styles.whatandwhen}>
            <Ratings nutrition_grade_fr={product.nutrition_grade_fr} />
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
    </SafeAreaView>
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
    height:40,
  },
});
export default HistoryItem;
