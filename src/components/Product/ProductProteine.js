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

export default ProductProteine = ({product}) => {
  const textProteine = (product) => {
    if (product.nutriscore_data.proteins_value >= 10) {
      return 'Excellente quantité';
    } else if (product.nutriscore_data.proteins_value >= 5) {
      return 'Quantité moyenne';
    } else if (product.nutriscore_data.proteins_value < 3) {
      return 'Faible quantité';
    } else {
      return 'Non renseigné';
    }
  };
  const ratingProteineCircle = (product) => {
    if (product.nutriscore_data.proteins_value >= 10) {
      return colors.green;
    } else if (product.nutriscore_data.proteins_value >= 5) {
      return colors.orange;
    } else if (product.nutriscore_data.proteins_value <= 3) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.containerproteine}>
      <View style={styles.commentproteine}>
        <Text style={styles.titleproteines}>Protéines</Text>
        <Text style={styles.function}>{textProteine(product)}</Text>
      </View>
      <View style={styles.proteinevaluecircle}>
        <myIcon />
        <View style={styles.proteinesgrammeandvalue}>
          <Text>{product.nutriscore_data.proteins_value}</Text>
          <Text>{product.nutriments.proteins_unit}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerproteine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  titleproteines: {
    fontWeight: '600',
    fontSize: 15,
  },

  function: {
    color: 'grey',
  },
  proteinesgrammeandvalue: {
    flexDirection: 'row',
  },
});
