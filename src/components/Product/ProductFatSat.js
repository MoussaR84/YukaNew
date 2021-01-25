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

export default ProductFatSat = ({product}) => {
  const FatSatComment = (product) => {
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
  const FatSatCircle = (product) => {
    if (product.nutriments['saturated-fat'] >= 1) {
      return colors.green;
    } else if (product.nutriments['saturated-fat'] >= 10) {
      return colors.orange;
    } else if (product.nutriments['saturated-fat'] >= 20) {
      return colors.red;
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
          <View>
            <View style={styles.gramandvalue}>
              <Text style={styles.title}>Graisses Saturées</Text>
              <View style={styles.unitgramcontainaer}>
                <View View style={styles.unitgram}>
                  <Text style={styles.text}>
                    {product.nutriments['saturated-fat'] === undefined
                      ? '0'
                      : product.nutriments['saturated-fat']}
                  </Text>
                  <Text style={styles.text}>
                    {product.nutriments['saturated-fat_unit'] === undefined
                      ? 'g'
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
                  <AntDesign name="down" size={15} color="grey" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{FatSatComment(product)}</Text>
        </View>
      </View>
      <View style={styles.dividedcontainer}></View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
  },

  function: {
    color: 'grey',
  },
  gramandvalue: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-between',
  },
  comment: {
    marginLeft: 10,
  },

  unitgramcontainaer: {
    flexDirection: 'row',
  },
  text: {
    color: 'grey',
  },
  unitgram: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 13,
  },
  circlecalorie: {
    marginRight: 15,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
  },
});
