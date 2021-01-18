import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
import {
  sugarComment,
  sugarCircle,
  satfatComment,
  satfatCircle,
  caloriecirclecolor,
  isBioorNot,
  isBioorNotColor,
  textProteine,
  ratingProteineCircle,
  ratingFibreCircle,
  fiberComment,
  calorieComment,
  ratingScoreText,
  ratingProduct,
  ratingProductComment,
} from './productParser';

export default ProductSugar = ({product}) => {
  const sugarComment = (product) => {
    if (product.nutrient_levels === 'low') {
      return 'Faible quantité';
    } else if (product.nutrient_levels === 'high') {
      return 'Forte quantité';
    } else {
      return 'Données inaccessibles ou inexistantes';
    }
  };
  return (
    <View style={styles.containersugar}>
      <View style={styles.imagecatcalorie}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../assets/Icon/iconcatogorie/sugaricon.png')}
        />
      </View>
      <View style={styles.sugar}>
        <View style={styles.commentsugar}>
          <Text style={styles.titlesugar}>Sucre</Text>
          <View style={styles.sugarvalueandcircle}>
            <View style={styles.sugargramandvalue}>
              <Text style={styles.textsugar}>
                {product.nutriments.sugars_value}
              </Text>
              <Text style={styles.textsugar}>
                {product.nutriments.sugars_unit}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.function}>{sugarComment(product)}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containersugar: {
    flexDirection: 'row',
    padding: 15,
  },
  titlesugar: {
    fontWeight: '600',
    fontSize: 15,
    width: 50,
  },
  commentsugar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  function: {
    color: 'grey',
  },
  sugargramandvalue: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  sugar: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 10,
    width: 270,
  },
  textsugar: {
    color: 'grey',
  },
});
