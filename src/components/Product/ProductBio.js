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
import Entypo from 'react-native-vector-icons/Entypo';

export default ProductBio = ({product}) => {
  const isBioorNot = () => {
    if (product.labels_tags[0] === 'en:organic') {
      return 'Produit Biologique';
    } else {
      return 'Produit non Biologique';
    }
  };
  const isBioorNotColor = () => {
    if (product.labels_tags[0] === 'en:organic') {
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
            name="bio"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.comment}>
          <View>
            <View style={styles.gramandvalue}>
              <Text style={styles.title}>Bio</Text>
              <View style={styles.unitgramcontainaer}>
                <View style={styles.circlecalorie}>
                  <Entypo name="check" size={15} color={isBioorNotColor()} />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{isBioorNot(product)}</Text>
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
    width: 250,
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
  unitgramcalorie: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 13,
  },
  circlecalorie: {
    marginRight: 19,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',

    borderWidth: 1,
    marginLeft: 55,
  },
});
