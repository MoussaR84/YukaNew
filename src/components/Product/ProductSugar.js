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
const SugarComment = (nutrient_levels) => {
  if (nutrient_levels === 'low') {
    return 'Faible quantité';
  } else if (nutrient_levels === 'high') {
    return 'Forte quantité';
  } else {
    return 'Très faible quantité';
  }
};
const SugarCircle = (nutrient_levels) => {
  if (nutrient_levels === 'low') {
    return colors.green;
  } else if (nutrient_levels === 'high') {
    return colors.red;
  } else {
    return colors.grey;
  }
};

const ProductSugar = ({nutriments, nutrient_levels}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name="candycane"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.comment}>
          <View style={styles.gramandvalue}>
            <Text style={styles.title}>Sucres</Text>
          </View>
          <Text style={styles.function}>{SugarComment(nutrient_levels)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram}>
            <Text style={styles.text}>
              {nutriments.sugars_value === undefined
                ? ''
                : nutriments.sugars_value}
            </Text>
            <Text style={styles.text}>
              {nutriments.sugars_unit === undefined
                ? ''
                : nutriments.sugars_unit}
            </Text>
          </View>

          <View style={styles.circlecalorie}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={SugarCircle(nutrient_levels, colors)}
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

export default ProductSugar;
