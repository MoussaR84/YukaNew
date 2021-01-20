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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

  const satfatCircle = (product) => {
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
    <View style={styles.containersatfat}>
      <View style={styles.imagecatfatsat}>
        <Ionicons
          name="ios-water-outline"
          size={40}
          style={styles.circle}
          color="lightgrey"
        />
      </View>
      <View style={styles.fatsat}>
        <View style={styles.satfatcomment}>
          <View style={styles.unitgramfatsat}>
            <Text style={styles.titlefatsat}>Graisses Saturées</Text>
            <View style={styles.fatsatgrammeandvaluecontainer}>
              <View style={styles.fatsatgrammeandvalue}>
                <Text style={styles.textfatsat}>
                  {product.nutriments['saturated-fat']}
                </Text>
                <Text style={styles.textfatsat}>
                  {product.nutriments['saturated-fat_unit']}
                </Text>
              </View>

              <View style={styles.circlefiber}>
                <FontAwesome
                  name="circle"
                  size={20}
                  style={styles.circle}
                  color={satfatCircle(product)}
                />
              </View>
              <AntDesign name="down" size={20} color="grey" />
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
  fatsatgrammeandvaluecontainer: {
    flexDirection: 'row',
    width: 123,
    justifyContent: 'flex-end',
    paddingRight: 15,
  },

  fatsat: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 10,
  },
  unitgramfatsat: {
    flexDirection: 'row',
  },
  textfatsat: {
    color: 'grey',
  },
  circlefiber: {
    marginRight: 10,
  },
  fatsatgrammeandvalue: {
    marginRight: 10,
    flexDirection: 'row',
  },
});
