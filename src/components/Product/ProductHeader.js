import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../assets/colors';



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

  const ratingProduct = (product) => {
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
        <View style={styles.containerRatingProduct}>
          <Text style={styles.ratingScore}>{ratingScoreText(product)}/100</Text>
          <Text style={styles.ratingProductComment}>
            {ratingProductComment(product)}
          </Text>
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
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    fontFamily: 'Roboto',
    height: 180,
  },
  imagecontainer: {
    width: 90,
  },
  presentation: {
    marginBottom: 20,
  },
  nameProduct: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  ratingScore: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerRatingProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    marginBottom: 10,
    marginTop: 10,
  },
});
export default ProductHeader;
