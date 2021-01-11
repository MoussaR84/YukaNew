import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProductHeader = ({product}) => {
  return (
    <View style={styles.card}>
      <View style={styles.product}>
        <Image
          style={{height: 100, width: 80, borderRadius: 10}}
          source={{uri: product.image_url}}
        />
      </View>
      <View style={styles.presentation}>
        <Text style={styles.nameProduct}>{product.product_name}</Text>
        <Text style={styles.brand}>{product.brands}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  presentation: {
    alignItems: 'center',
    marginBottom: 60,
    justifyContent: 'center',
  },
  nameProduct: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  brands: {
    color: 'grey',
  },
});
export default ProductHeader;
