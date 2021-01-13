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
  return (
    <View style={styles.containerproteine}>
      <View style={styles.commentproteine}>
        <Text style={styles.titleproteines}>Protéines</Text>
        <Text style={styles.function}>{textProteine(product)}</Text>
      </View>
      <View style={styles.proteinevaluecircle}>
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
    
  },
  titleproteines: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  function:{
    color:"grey",
  },
});
