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

export default ProductCalorie = ({product}) => {
  const calorieComment = (product) => {
    if (product.nutriments['energy-kcal_value'] <= 800) {
      return 'Extrêmement Calorique';
    } else if (product.nutriments['energy-kcal_value'] <= 560) {
      return 'Très calorique';
    } else if (product.nutriments['energy-kcal_value'] <= 360) {
      return 'Riche en calorie';
    } else if (product.nutriments['energy-kcal_value'] <= 160) {
      return 'Peu calorique';
    } else {
      return 'Produit non enregistré';
    }
  };
  const caloriecirclecolor = (product) => {
    if (product.nutriments['energy-kcal_value'] <= 800) {
      return colors.red;
    } else if (product.nutriments['energy-kcal_value'] <= 560) {
      return colors.orange;
    } else if (product.nutriments['energy-kcal_value'] <= 360) {
      return colors.greenLight;
    } else if (product.nutriments['energy-kcal_value'] <= 160) {
      return colors.green;
    } else {
      return colors.grey;
    }
  };

  return (
    <>
      <View style={styles.caloriecontainer}>
        <View style={styles.imagecatcalorie}>
          <MaterialCommunityIcons
            name="fire"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.commentcalories}>
          <View style={styles.calorievaluecircle}>
            <View style={styles.caloriegramandvalue}>
              <Text style={styles.titlecalorie}>Calories</Text>
              <View style={styles.unitgramcaloriecontainaer}>
                <View View style={styles.unitgramcalorie}>
                  <Text style={styles.textcalorie}>
                    {product.nutriments['energy-kcal_value'] === undefined
                      ? ''
                      : product.nutriments['energy-kcal_value']}
                  </Text>
                  <Text style={styles.textcalorie}>
                    {product.nutriments['energy-kcal_unit'] === undefined
                      ? ''
                      : product.nutriments['energy-kcal_unit']}
                  </Text>
                  <View style={styles.circlecalorie}>
                    <FontAwesome
                      name="circle"
                      size={15}
                      style={styles.circle}
                      color={caloriecirclecolor(product, colors)}
                    />
                  </View>
                  <AntDesign name="right" size={15} color="grey" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{calorieComment(product)}</Text>
        </View>
      </View>
      <View style={styles.dividedcontainer}></View>
    </>
  );
};
const styles = StyleSheet.create({
  caloriecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  titlecalorie: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
  },

  function: {
    color: 'grey',
    fontSize: 12,
  },
  caloriegramandvalue: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-between',
  },
  commentcalories: {
    marginLeft: 10,
  },
  diagramcalorie: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
  },
  unitgramcaloriecontainaer: {
    flexDirection: 'row',
  },
  textcalorie: {
    color: 'grey',
  },
  unitgramcalorie: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circlecalorie: {
    marginRight: 15,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    marginLeft: 55,
  },
});
