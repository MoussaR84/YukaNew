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
import Imagebiocontainer from '../../assets/Icon/iconcatogorie/bioicon.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {max} from 'react-native-reanimated';

export default ProductBio = ({product}) => {
  const isBioorNot = (product) => {
    if (product.labels_tags[0] === 'en:organic') {
      return 'Produit Biologique';
    } else {
      return 'Produit non Biologique';
    }
  };

  const isBioorNotColor = (product) => {
    if (product.labels_tags[0] === 'en:organic') {
      return colors.green;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.biocontener}>
      <View style={styles.bio}>
        <View style={styles.imagecatbio}>
          <MaterialCommunityIcons
            name="bio"
            size={40}
            style={styles.circle}
            color="lightgrey"
          />
        </View>
        <View style={styles.biocontainerinfo}>
          <View style={styles.biocomment}>
            <Text style={styles.textbio}>Bio</Text>
            <Text style={styles.function}>{isBioorNot(product)}</Text>
          </View>
        </View>
        <View style={styles.entypoBioorNot}>
          <Entypo name="check" size={20} color={isBioorNotColor(product)} />
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
  },

  biocontainerinfo: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 220,
    paddingBottom: 10,
    marginLeft: 10,
  },
  textbio: {
    fontWeight: '600',
    fontSize: 15,
  },
  function: {
    color: 'grey',
  },
  bio: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  entypoBioorNot: {
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 33,
  },
});
