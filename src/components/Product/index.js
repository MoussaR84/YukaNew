import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import ProductHeader from './ProductHeader';
import ProductQuality from './ProductQuality';
import ProductBio from './ProductBio';
import ProductProteine from './ProductProteine';
import ProductFibre from './ProductFibre';
import ProductCalorie from './ProductCalorie';
import ProductFatSat from './ProductFatSat';
import ProductSugar from './ProductSugar';
import DefaultProduct from './DefaultProduct';

export default function Product({product}) {
  const {nutriments, isAFoodProduct} = product;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {isAFoodProduct ? (
          <>
            <ProductHeader product={product} />
            <ProductQuality product={product} />
            <ProductBio product={product} />
            <ProductProteine product={product} />
            <ProductFibre product={product} />
            <ProductCalorie product={product} />
            {!!nutriments && <ProductSugar nutriments={nutriments} />}
            <ProductFatSat product={product} />
          </>
        ) : (
          <DefaultProduct product={product} />
        )}
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
