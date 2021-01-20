import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HistoryItem = ({product}) => {
  const ratingProductComment = (product) => {
    if (product.nutrition_grade_fr === 'a') {
      return 'Excellent';
    } else if (product.nutrition_grade_fr === 'b') {
      return 'Satisfaisant';
    } else if (product.nutrition_grade_fr === 'c') {
      return 'Bon';
    } else if (product.nutrition_grade_fr === 'd') {
      return 'Mauvais';
    } else if (product.nutrition_grade_fr === 'e') {
      return 'Médiocre';
    } else {
      return 'Non noté';
    }
  };

  const ratingProduct = (product, colors) => {
    if (product.nutrition_grade_fr === 'a') {
      return colors.green;
    } else if (product.nutrition_grade_fr === 'b') {
      return colors.orange;
    } else if (product.nutrition_grade_fr === 'c') {
      return colors.red;
    } else if (product.nutrition_grade_fr === 'd') {
      return colors.brown;
    } else if (product.nutrition_grade_fr === 'e') {
      return colors.black;
    } else {
      return colors.grey;
    }
  };
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={{height: 100, width: 80, borderRadius: 10}}
        source={{uri: product.image_url}}
      />
      <View style={styles.nameandbrandcontainer}>
        <View style={styles.nameandbrand}>
          <Text style={styles.nameProduct}>{product.product_name}</Text>
          <Text style={styles.brands}>{product.brands}</Text>
          <View style={styles.containerRatAndCircProduct}>
            <View style={styles.circleFont}>
              <FontAwesome
                name="circle"
                size={20}
                style={styles.circle}
                color={ratingProduct(product, colors)}
              />
            </View>
            <View style={styles.containerRatingProduct}>
              <Text style={styles.ratingProductComment}>
                {ratingProductComment(product)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: 120,
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontFamily: 'roboto-light',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameProduct: {
    fontWeight: '700',
    fontSize: 12,
  },

  brands: {
    color: 'grey',
  },
  nameandbrand: {
    height: '100%',
    width: 220,
  },
  nameandbrandcontainer: {
    marginLeft: 5,
  },
  ratingproduct: {
    backgroundColor: 'red',
  },
  containerRatAndCircProduct: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: '700',
  },
  circleFont: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    paddingRight: 5,
  },
  containerRatingProduct: {
    justifyContent: 'center',
    width: 160,
    fontWeight: '700',
  },
  ratingScore: {
    fontWeight: '600',
  },
  ratingProductComment: {
    color: 'grey',
  },
});
export default HistoryItem;
