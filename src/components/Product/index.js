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
import ProductQuality from './ProductQuality';
import ProductBio from './ProductBio';
import ProductProteine from './ProductProteine';
import ProductFibre from './ProductFibre';
import ProductCalorie from './ProductCalorie';
import ProductFatSat from './ProductFatSat';
import ProductSugar from './ProductSugar';

export default function Product({product}) {
  // console.log('product.product_nam', product.product_name);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProductHeader product={product} />
        <ProductQuality product={product} />
        <ProductBio product={product} />
        <ProductProteine product={product} />
        <ProductFibre product={product} />
        <ProductCalorie product={product} />
        <ProductSugar product={product} />
        <ProductFatSat product={product} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    marginBottom: 0,
  },
});
