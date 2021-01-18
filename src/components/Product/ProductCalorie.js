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

export default ProductCalorie = ({product}) => {
  const calorieComment = (product) => {
    if (product.nutriments['energy-kcal_value'] <= 800) {
      return 'Extremement Calorique';
    } else if (product.nutriments['energy-kcal_value'] <= 560) {
      return 'Très calorique';
    } else if (product.nutriments['energy-kcal_value'] <= 360) {
      return 'Riche en calorie';
    } else if (product.nutriments['energy-kcal_value'] <= 160) {
      return 'Peu calorique';
    } else {
      return 'Produit non enrregistré';
    }
  };
  return (
    <View style={styles.caloriecontainer}>
      <View style={styles.imagecatcalorie}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../../assets/Icon/iconcatogorie/caloricon.png')}
        />
      </View>
      <View style={styles.commentcalories}>
        <View style={styles.calorievaluecircle}>
          <View style={styles.caloriegramandvalue}>
            <Text style={styles.titlecalorie}>Calories</Text>
            <View style={styles.unitgramcalorie}>
              <Text style={styles.textcalorie}>
                {product.nutriments['energy-kcal_value']}
              </Text>
              <Text style={styles.textcalorie}>
                {product.nutriments['energy-kcal_unit']}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.function}>{calorieComment(product)}</Text>
        <View style={styles.diagramcalorie}>
          <View
            style={{
              height: 3,
              width: 32,
              backgroundColor: colors.green,
            }}></View>
          <View
            style={{
              height: 3,
              width: 40,
              backgroundColor: colors.greenLight,
            }}></View>
          <View
            style={{
              height: 3,
              width: 40,
              backgroundColor: colors.orange,
            }}></View>
          <View
            style={{
              height: 3,
              width: 48,
              backgroundColor: colors.red,
            }}></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  caloriecontainer: {
    flexDirection: 'row',
    padding: 15,
  },
  titlecalorie: {
    fontWeight: '600',
    fontSize: 15,
  },

  function: {
    color: 'grey',
  },
  caloriegramandvalue: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
  },
  commentcalories: {
    marginLeft: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  diagramcalorie: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
  },
  unitgramcalorie: {
    flexDirection: 'row',
    marginRight: 12,
  },
  textcalorie: {
    color: 'grey',
  },
});
