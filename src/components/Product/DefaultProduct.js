import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../assets/colors';

export default function DefaultProduct({product}) {
  return (
    <View style={styles.card}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{uri: product.image_url}} />
      </View>
      <View style={styles.cardRightBlock}>
        <View style={styles.titleAndBrand}>
          <Text style={styles.productTitle}>{product.product_name}</Text>
          <Text style={styles.brand}>{product.brands}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  lineHeader: {
    borderTopColor: '#DEDEDC',
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 10,
    backgroundColor: '#EFEFEF',
  },

  imagecontainer: {
    width: 80,
  },
  cardRightBlock: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'Roboto-light',
  },
  image: {height: 100, width: 80, borderRadius: 10},

  brand: {
    color: colors.greyText,
    fontSize: 12,
  },
});
