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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

  const sugarCircle = (product) => {
    if (product.nutrient_levels === 'low') {
      return colors.green;
    } else if (product.nutrient_levels === 'high') {
      return colors.red;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.containersugar}>
      <View style={styles.imagecatcalorie}>
        <MaterialCommunityIcons
          name="candycane"
          size={40}
          style={styles.circle}
          color="lightgrey"
        />
      </View>
      <View style={styles.sugar}>
        <View style={styles.commentsugar}>
          <Text style={styles.titlesugar}>Sucre</Text>
          <View style={styles.sugarvalueandcircle}>
            <View style={styles.sugargramandvaluecontainer}>
              <View style={styles.sugargramandvalue}>
                <Text style={styles.textsugar}>
                  {product.nutriments.sugars_value}
                </Text>
                <Text style={styles.textsugar}>
                  {product.nutriments.sugars_unit}
                </Text>
              </View>

              <View style={styles.circlesugar}>
                <FontAwesome
                  name="circle"
                  size={20}
                  style={styles.circle}
                  color={sugarCircle(product)}
                />
              </View>
              <View style={styles.antDesign}>
                <AntDesign name="down" size={20} color="grey" />
              </View>
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
  sugargramandvaluecontainer: {
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
  circlesugar: {
    marginRight: 10,
  },
  sugargramandvalue: {
    flexDirection: 'row',
    marginRight: 10,
  },
  antDesign: {
    marginRight: 5,
  },
});
