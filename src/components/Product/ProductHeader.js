import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../assets/colors';
import greencircle from '../../assets/Icon/circle/greencircle.png';
import redcircle from '../../assets/Icon/circle/redcircle.png';
import greycircle from '../../assets/Icon/circle/greycircle.png';
import orangecircle from '../../assets/Icon/circle/orangecircle.png';
import blackcircle from '../../assets/Icon/circle/blackcircle.png';
import browncircle from '../../assets/Icon/circle/browncircle.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    <View style={styles.card}>
      <View style={styles.imagecontainer}>
        <Image
          style={{height: 100, width: 80, borderRadius: 10}}
          source={{uri: product.image_url}}
        />
      </View>
      <View style={styles.presentation}>
        <Text style={styles.nameProduct}>{product.product_name}</Text>
        <Text style={styles.brand}>{product.brands}</Text>
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
            <Text style={styles.ratingScore}>
              {ratingScoreText(product)}/100
            </Text>
            <Text style={styles.ratingProductComment}>
              {ratingProductComment(product)}
            </Text>

            {/* <View style={styles.ratingProduct}>{ratingProduct(product)}</View> */}
            {/* {product.nutrition_grade_fr === 'a'? greencircle && product.nutrition_grade_fr === 'b'? orangecircle && product.nutrition_grade_fr === 'c'? redcircle && product.nutrition_grade_fr ==='d'? browncircle && product.nutrition_grade_fr === 'e' : greycircle } */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 10,
    height: 180,
    paddingBottom: 25,
  },
  imagecontainer: {
    width: 90,
  },
  presentation: {
    marginBottom: 20,
    paddingTop: 10,
  },
  nameProduct: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  ratingScore: {
    fontWeight: '600',
    fontSize: 15,
  },
  containerRatingProduct: {
    justifyContent: 'center',
    width: 160,
    marginBottom: 10,
    marginTop: 10,
  },
  containerRatAndCircProduct: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  circleFont: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    paddingRight: 5,
  },
});

export default ProductHeader;
