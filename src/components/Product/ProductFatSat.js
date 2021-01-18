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
      return 'Graisses saturées en quantité';
    } else if (product.nutriments['saturated-fat'] >= 20) {
      return 'Graisses saturées en quantité';
    } else {
      return 'Graisses saturées non présentes';
    }
  };

  return (
    <View style={styles.containersatfat}>
      <View style={styles.imagecatfatsat}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../assets/Icon/iconcatogorie/fatsaticon.png')}
        />
      </View>
      <View style={styles.fatsat}>
        <View style={styles.satfatcomment}>
          <View style={styles.unitgramfatsat}>
            <Text style={styles.titlefatsat}>Graisses Saturées</Text>
            <View style={styles.fatsatgrammeandvalue}>
              <Text>{product.nutriments['saturated-fat']}</Text>
              <Text>{product.nutriments['saturated-fat_unit']}</Text>
            </View>
          </View>

          <Text style={styles.function}>{satfatComment(product)}</Text>
        </View>
        <View style={styles.fatsatvalueandcircle}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containersatfat: {
    flexDirection: 'row',
    padding: 15,
  },
  titlefatsat: {
    fontWeight: '600',
    fontSize: 15,
  },

  function: {
    color: 'grey',
  },
  fatsatgrammeandvalue: {
    flexDirection: 'row',
    width: 123,
    justifyContent: 'flex-end',
    paddingRight:16,

  },

  fatsat: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingLeft:10,
  },
  unitgramfatsat:{
    flexDirection:"row", 
  },
});
