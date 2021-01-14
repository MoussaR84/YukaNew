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
    <View style={styles.sugarcontainer}>
      <View style={styles.commentsugar}>
        <Text style={styles.sugartitle}>Sucre</Text>
        <Text style={styles.function}>{sugarComment(product)}</Text>
      </View>
      <View style={styles.sugarvalueandcircle}>
        <View style={styles.sugargramandvalue}>
          <Text>{product.nutriments.sugars_value}</Text>
          <Text>{product.nutriments.sugars_unit}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sugarcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  sugartitle: {
    fontWeight: '600',
    fontSize: 15,
  },
  function: {
    color: 'grey',
  },
  sugargramandvalue: {
    flexDirection: 'row',
  },
});
