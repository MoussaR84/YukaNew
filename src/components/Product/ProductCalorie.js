import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
  const calorieCirclecolor = (product) => {
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
      <View style={styles.container}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name="fire"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.comment}>
          <View style={styles.gramandvalue}>
            <Text style={styles.title}>Calories</Text>
          </View>
          <Text style={styles.function}>{calorieComment(product)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram}>
            <Text style={styles.text}>
              {product.nutriments['energy-kcal_value'] === undefined
                ? ''
                : product.nutriments['energy-kcal_value']}
            </Text>
            <Text style={styles.text}>
              {product.nutriments['energy-kcal_unit'] === undefined
                ? ''
                : product.nutriments['energy-kcal_unit']}
            </Text>
          </View>

          <View style={styles.circlecalorie}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={calorieCirclecolor(product, colors)}
            />
          </View>
          <View style={styles.entypoDown}>
            <AntDesign name="right" size={15} color="grey" />
          </View>
        </View>
      </View>
      <View style={styles.dividedcontainer} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 5,
  },
  title: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
  },

  function: {
    color: 'grey',
    fontSize: 12,
  },
  gramandvalue: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  comment: {
    width: 170,
  },

  unitgramcontainaer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  text: {
    color: 'grey',
    fontFamily: 'Roboto-Light',
    fontSize: 13,
  },

  unitgram: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'flex-end',
  },
  circlecalorie: {
    marginRight: 5,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    marginLeft: 55,
  },
});
