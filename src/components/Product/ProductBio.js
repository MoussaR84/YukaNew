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

export default ProductBio = ({product}) => {

const isBioorNot = (product) => {
    if (product.labels_tags[0] === 'en:organic') {
          return 'Produit Biologique';
        } else {
          return 'Produit non Biologique';
        }
      };
  return (
    <View style={styles.biocontener}>

              <View style={styles.bio}>
                <View style={styles.biocomment}>
                  <Text style={styles.textbio}>Bio</Text>
                  <Text>{isBioorNot(product)}</Text>
                </View>
              </View>
              </View>

  );
};
const styles = StyleSheet.create({
    biocontener: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  qualite: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});