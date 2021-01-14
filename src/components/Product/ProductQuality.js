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

export default ProductQuality = ({product}) => {
  return (
    <View style={styles.qualityTitle}>
      <Text style={styles.qualite}>Qualités</Text>
      <Text style={styles.portion}>
        Pour {product.nutrition_data_prepared_per}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  qualityTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    fontFamily: 'Roboto',
  },
  qualite: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
