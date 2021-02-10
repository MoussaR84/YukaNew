import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductBio = ({product}) => {
  const isBioorNot = () => {
    if (product.labels_tags[0] === 'en:organic') {
      return 'Produit Biologique';
    } else if (product.nutrient_levels === undefined) {
      return 'Pas de données ';
    } else if (product.brands_tags === 'clope') {
      return 'Fumer est très mauvais';
    } else {
      return 'Produit non Biologique';
    }
  };

  const isBioorNotColor = () => {
    if (product.labels_tags[0] === 'en:organic') {
      return colors.green;
    } else if (product.labels_tags[0] === undefined) {
      return colors.red;
    } else if (product.brands_tags === 'clope') {
      return;
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
          <View style={styles.gramandvalue}>
            <Text style={styles.title}>Bio</Text>
          </View>
          <Text style={styles.function}>{isBioorNot(product)}</Text>
        </View>
        <View style={styles.unitgramcontainaer}>
          <View View style={styles.unitgram} />
          <View style={styles.circlecalorie}>
            <Entypo name="check" size={15} color={isBioorNotColor()} />
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

export default ProductBio;
