import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RatingProteineCircle, TextProteine} from './productParser';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductProteine = ({product}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name="fire"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.comment}>
          <View style={styles.gramAndValue}>
            <Text style={styles.title}>Protéines</Text>
          </View>
          <Text style={styles.function}>{TextProteine(product)}</Text>
        </View>
        <View style={styles.unitGramContainaer}>
          <View View style={styles.unitGram}>
            <Text style={styles.text}>
              {product.nutriscore_data.proteins_value === undefined
                ? ''
                : product.nutriscore_data.proteins_value}
            </Text>
            <Text style={styles.text}>
              {product.nutriments.proteins_unit === undefined ? '' : 'g'}
            </Text>
          </View>

          <View style={styles.circleProtein}>
            <FontAwesome
              name="circle"
              size={15}
              style={styles.circle}
              color={RatingProteineCircle(product)}
            />
          </View>
          <View style={styles.entypoDown}>
            <AntDesign name="right" size={15} color="grey" />
          </View>
        </View>
      </View>
      <View style={styles.dividedContainer} />
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
  gramAndValue: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  comment: {
    width: 170,
  },

  unitGramContainaer: {
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

  unitGram: {
    flexDirection: 'row',
    width: 40,
    justifyContent: 'flex-end',
  },
  circleProtein: {
    marginRight: 5,
  },
  dividedContainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    marginLeft: 55,
  },
});
export default ProductProteine;
