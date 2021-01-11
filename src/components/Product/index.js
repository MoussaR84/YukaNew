import React, {useState, useEffect} from 'react';
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
// import { Entypo } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
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
import ProductHeader from './ProductHeader';
export default function Product({product}) {
  console.log('roduct.product_nam', product.product_name);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProductHeader product={product} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    height: '100%',
    marginBottom:0,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },

  // contenaireProduct: {
  //   paddingRight: 10,
  //   paddingLeft: 6,
  // },

  qualityTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ratingScoreText: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },

  product: {
    marginBottom: 50,
  },

  qualite: {
    fontWeight: 'bold',
    color: 'black',
  },
  portion: {
    fontWeight: 'bold',
    color: 'grey',
  },

  bio: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  biocontener: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  biocomment: {
    justifyContent: 'center',
  },

  logobio: {
    width: 50,
  },

  textbio: {
    fontWeight: 'bold',
    color: 'grey',
    alignItems: 'flex-start',
  },
  checkentypo: {
    width: 30,
  },

  // proteines
  containerproteine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleproteines: {
    fontWeight: 'bold',
    color: 'grey',
  },

  logoproteine: {
    width: 50,
  },

  proteinevaluecircle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  proteinesgrammeandvalue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
  // fibres

  containerfibre: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logofibre: {
    width: 50,
  },

  titlefibre: {
    fontWeight: 'bold',
    color: 'grey',
  },

  fibrevaluecircle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  fibregramandvalue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },

  // calories//
  caloriecontainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titlecalorie: {
    fontWeight: 'bold',
    color: 'grey',
  },

  logocalorie: {
    width: 50,
  },

  calorievaluecircle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  caloriegramandvalue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },

  diagramcalorie: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },

  //graisses saturées//
  containersatfat: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titlefatsat: {
    fontWeight: 'bold',
    color: 'grey',
  },

  logofatsat: {
    width: 50,
  },

  fatsatvalueandcircle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fatsatgrammeandvalue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },

  //sugar//
  sugarcontainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sugartitle: {
    fontWeight: 'bold',
    color: 'grey',
  },

  logosugar: {
    width: 50,
  },

  sugargramandvalue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },

  sugarvalueandcircle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
