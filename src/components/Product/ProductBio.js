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

export default ProductBio = ({product}) => {
  const isBioorNot = (product) => {
    if (product.labels_tags[0] === 'en:organic') {
      return 'Produit Biologique';
    } else {
      return 'Produit non Biologique';
    }
  };

  // const isBioorNotColor=(product)=>{
  //   if (product.labels_tags[0] === 'en:organic') {
  //     return {require("../../assets/Icon/greencheck.png")};
  //   } else {
  //     return {require("../../assets/Icon/blackcross.png")};
  //   }
  // };

  return (
    <View style={styles.biocontener}>
      <View style={styles.bio}>
        <View style={styles.biocomment}>
          <Text style={styles.textbio}>Bio</Text>
          <Text style={styles.function}>{isBioorNot(product)}</Text>
          <Image style={style.isBioorNotColor} color={isBioorNotColor}/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  biocontener: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  textbio: {
    fontWeight: '600',
    fontSize: 15,
  },
  function: {
    color: 'grey',
  },
  bio:{
    flexDirection:"row"
  }
});
