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

export default ProductProteine = ({product}) => {
  const TextProteine = (product) => {
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
  const RatingProteineCircle = (product) => {
    if (product.nutriscore_data.proteins_value >= 10) {
      return colors.green;
    } else if (product.nutriscore_data.proteins_value >= 5) {
      return colors.orange;
    } else if (product.nutriscore_data.proteins_value <= 3) {
      return colors.grey;
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
            <Text style={styles.title}>Protéines</Text>
          </View>
          <Text style={styles.function}>{TextProteine(product)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram}>
            <Text style={styles.text}>
              {product.nutriscore_data.proteins_value === undefined
                ? ''
                : product.nutriscore_data.proteins_value}
            </Text>
            <Text style={styles.text}>
              {product.nutriments.proteins_unit === undefined
                ? 'g'
                : product.nutriments.proteins_unit}
            </Text>
          </View>

          <View style={styles.circlecalorie}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={RatingProteineCircle(product, colors)}
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
