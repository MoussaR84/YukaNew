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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';

const ProductFatSat = ({product}) => {
  const FatSatComment = (product) => {
    if (product.nutriments['saturated-fat'] >= 1) {
      return 'Peu de graisses saturées';
    } else if (product.nutriments['saturated-fat'] >= 10) {
      return 'Graisses saturées en quantité';
    } else if (product.nutriments['saturated-fat'] >= 20) {
      return 'Faible quantité';
    } else if (product.nutriments['saturated-fat'] >= 0) {
      return 'Très faible quantité ';
    } else if ((product.nutriments['saturated-fat'] = 0)) {
      return 'Non Présente ';
    } else {
      return ' non enregistré';
    }
  };
  const FatSatCircle = (product) => {
    if (product.nutriments['saturated-fat'] >= 1) {
      return colors.green;
    } else if (product.nutriments['saturated-fat'] >= 10) {
      return colors.orange;
    } else if (product.nutriments['saturated-fat'] >= 20) {
      return colors.red;
    } else if (product.nutriments['saturated-fat'] >= 0) {
      return colors.bown;
    } else if ((product.nutriments['saturated-fat'] = 0)) {
      return colors.black;
    } else {
      return colors.grey;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <Ionicons
            name="ios-water-outline"
            size={30}
            style={styles.circle}
            color="lightgrey"
          />
        </View>
        <View style={styles.comment}>
          <View style={styles.gramandvalue}>
            <Text style={styles.title}>Graisses Saturées</Text>
          </View>
          <Text style={styles.function}>{FatSatComment(product)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram}>
            <Text style={styles.text}>
              {product.nutriments['saturated-fat'] === undefined
                ? ''
                : product.nutriments['saturated-fat']}
            </Text>
            <Text style={styles.text}>
              {product.nutriments['saturated-fat_unit'] === undefined
                ? ''
                : product.nutriments['saturated-fat_unit']}
            </Text>
          </View>

          <View style={styles.circlecalorie}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={FatSatCircle(product, colors)}
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
  },
});

export default ProductFatSat;
