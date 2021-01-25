import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ratings from '../Product/Rating';

const ProductHeader = ({product}) => {
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
      return 'pas enregistré';
    }
  };

  const ratingScoreText = (product) => {
    if (product.nutrition_grade_fr === 'a') {
      return '100';
    } else if (product.nutrition_grade_fr === 'b') {
      return '80';
    } else if (product.nutrition_grade_fr === 'c') {
      return '70';
    } else if (product.nutrition_grade_fr === 'd') {
      return '30';
    } else {
      return '10';
      // } else {
      //   ("Données non disponible");
      //   // alert("not registred");
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
    <>
      <View style={styles.card}>
        <View style={styles.imagecontainer}>
          <Image
            style={{height: 100, width: 80, borderRadius: 10}}
            source={{uri: product.image_url}}
          />
        </View>
        <View style={styles.cardRightBlock}>
          <View style={styles.titleAndBrand}>
            <Text style={styles.productTitle}>{product.product_name}</Text>
            <Text style={styles.brand}>{product.brands}</Text>
          </View>
          <View style={styles.whatandwhen}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={ratingProduct(product, colors)}
            />
            <View style={styles.ratandComment}>
              <Text style={styles.ratingScore}>
                {ratingScoreText(product)}/100
              </Text>
              <Text style={styles.ratingProductComment}>
                {ratingProductComment(product)}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lineHeader}></View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 30,
  },
  lineHeader: {
    borderTopColor: '#DEDEDC',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 10,
    backgroundColor: '#EFEFEF',
  },

  imagecontainer: {
    width: 80,
  },
  cardRightBlock: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Roboto-light',
  },
  ratandComment: {
    paddingLeft: 5,
  },
  whatandwhen: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingTop: 5,
  },
  ratingScore: {
    fontFamily: 'Roboto-light',
  },
  ratingProductComment: {
    color: colors.greyText,
    fontFamily: 'Roboto-light',
    fontSize: 12,
  },
  brand: {
    color: colors.greyText,
    fontSize: 12,
  },
});

export default ProductHeader;
