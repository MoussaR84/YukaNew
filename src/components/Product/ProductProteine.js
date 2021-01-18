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

export default ProductProteine = ({product}) => {
  const textProteine = (product) => {
    if (product.nutriscore_data.proteins_value >= 10) {
      return 'Excellente quantité';
    } else if (product.nutriscore_data.proteins_value >= 5) {
      return 'Quantité moyenne';
    } else if (product.nutriscore_data.proteins_value < 3) {
      return 'Faible quantité';
    } else {
      return 'Non renseigné';
    }
  };
  const ratingProteineCircle = (product) => {
    if (product.nutriscore_data.proteins_value >= 10) {
      return colors.green;
    } else if (product.nutriscore_data.proteins_value >= 5) {
      return colors.orange;
    } else if (product.nutriscore_data.proteins_value <= 3) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.containerproteine}>
      <View style={styles.proteines}>
        <View style={styles.imagecatproteine}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/Icon/iconcatogorie/proteinicon.png')}
          />
        </View>
        <View style={styles.proteinecontainerinfo}>
          <View style={styles.proteinecomment}>
            <Text style={styles.titleproteines}>Protéines</Text>
            <View style={styles.proteinesgrammeandvalue}>
              <Text>{product.nutriscore_data.proteins_value}</Text>
              <Text>{product.nutriments.proteins_unit}</Text>
            </View>
          </View>
          <Text style={styles.function}>{textProteine(product)}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerproteine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  proteinecontainerinfo: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 300,
    paddingBottom: 10,
    marginLeft: 10,
  },
  titleproteines: {
    fontWeight: '600',
    fontSize: 15,
  },
  function: {
    color: 'grey',
  },
  proteines: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  proteinesgrammeandvalue: {
    flexDirection: 'row',
    width: 170,
    justifyContent: 'flex-end',
  },
  proteinecomment: {
    flexDirection: 'row',
  },
});
