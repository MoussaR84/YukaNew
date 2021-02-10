import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {FatSatComment, FatSatCircle} from './productParser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductFatSat = ({product}) => {
  console.log(
    product.nutriments['saturated-fat_unit'],
    "product.nutriments['saturated-fat_unit']",
  );
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
          <View style={styles.gramandvalue}>
            <Text style={styles.title}>Graisses Saturées</Text>
          </View>
          <Text style={styles.function}>{FatSatComment(product)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram}>
            <Text style={styles.text}>
              {product.nutriments['saturated-fat'] === undefined
                ? ''
                : product.nutriments['saturated-fat']}
            </Text>
            <Text style={styles.text}>
              {product.nutriments['saturated-fat_unit'] === undefined
                ? 'g'
                : 'g'}
            </Text>
          </View>

          <View style={styles.circlecalorie}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={FatSatCircle(product)}
            />
          </View>
          <View style={styles.entypoDown}>
            <AntDesign name="right" size={15} color="grey" />
          </View>
        </View>
      </View>
      <View style={styles.dividedcontainer} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 5,
  },
  title: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
  },

  function: {
    color: 'grey',
    fontSize: 12,
  },
  gramandvalue: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  comment: {
    width: 170,
  },

  unitgramcontainaer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  text: {
    color: 'grey',
    fontFamily: 'Roboto-Light',
    fontSize: 13,
  },

  unitgram: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'flex-end',
  },
  circlecalorie: {
    marginRight: 5,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
  },
});

export default ProductFatSat;
