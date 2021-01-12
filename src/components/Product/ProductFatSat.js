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

export default ProductFatSat = ({product}) => {
    const satfatComment = (product) => {
        if (product.nutriments['saturated-fat'] >= 1) {
          return 'Peu de graisses saturées';
        } else if (product.nutriments['saturated-fat'] >= 10) {
          return 'graisses saturées en quantité';
        } else if (product.nutriments['saturated-fat'] >= 20) {
          return 'graisses saturées en quantité';
        } else {
          return colors.grey;
        }
      };
        
  return (
    <View style={styles.containersatfat}>
    

    <View style={styles.satfatcomment}>
      <Text style={styles.titlefatsat}>Graisses Saturées</Text>
      <Text>{satfatComment(product)}</Text>
    </View>
    <View style={styles.fatsatvalueandcircle}>
      <View style={styles.fatsatgrammeandvalue}>
        <Text>{product.nutriments["saturated-fat"]}</Text>
        <Text>{product.nutriments["saturated-fat_unit"]}</Text>
      </View>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    containersatfat: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'pink',
  },
  qualite: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
