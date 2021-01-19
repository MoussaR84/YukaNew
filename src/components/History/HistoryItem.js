import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HistoryItem = ({product}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={{height: 100, width: 80, borderRadius: 10}}
        source={{uri: product.image_url}}
      />
      <View style={styles.nameandbrandcontainer}>
        <View style={styles.nameandbrand}>
          <Text style={styles.nameProduct}>{product.product_name}</Text>
          <Text style={styles.brands}>{product.brands}</Text>
          {/* <View style={styles.ratingproduct}>{ratingProduct(product)}</View>
      <View style={styles.ratingproductcomment}>
        {ratingProductComment(product)}
      </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: 120,
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameProduct: {
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },

  brands: {
    color: 'grey',
  },
  nameandbrand: {
    height: '100%',
    width: 220,
  },
  nameandbrandcontainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 5,
  },
  ratingproduct: {
    backgroundColor: 'red',
  },
});
export default HistoryItem;
