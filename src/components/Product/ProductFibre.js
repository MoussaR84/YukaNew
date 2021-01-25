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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default ProductFibre = ({product}) => {
  const FiberComment = (product) => {
    if (product.nutriments.fiber >= 5) {
      return 'Riche en fibres';
    } else if (product.nutriments.fiber >= 3) {
      return 'quantités de fibres satisfaisante';
    } else if (product.nutriments.fiber >= 1) {
      return 'Quelques fibres';
    } else {
      return 'Fibres non présentes';
    }
  };
  const RatingFiberCircle = (product) => {
    if (product.fiber_value >= 1) {
      return colors.green;
    } else if (product.fiber_value >= 0.5) {
      return colors.orange;
    } else if (product.proteins_value <= 0.5) {
      return colors.red;
    } else {
      return colors.grey;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name="corn"
            size={30}
            style={styles.circle}
            color="grey"
          />
        </View>
        <View style={styles.comment}>
          <View>
            <View style={styles.gramandvalue}>
              <Text style={styles.title}>Fibres</Text>
              <View style={styles.unitgramcontainaer}>
                <View View style={styles.unitgram}>
                  <Text style={styles.text}>
                    {product.nutriments.fiber === undefined
                      ? '0'
                      : product.nutriments.fiber}
                  </Text>
                  <Text style={styles.text}>
                    {product.nutriments.fiber_unit === undefined
                      ? 'g'
                      : product.nutriments.fiber_unit}
                  </Text>
                </View>

                <View style={styles.circlecalorie}>
                  <FontAwesome
                    name="circle"
                    size={15}
                    style={styles.circle}
                    color={RatingFiberCircle(product, colors)}
                  />
                </View>
                <View style={styles.entypoDown}>
                  <AntDesign name="down" size={15} color="grey" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{FiberComment(product)}</Text>
        </View>
      </View>
      <View style={styles.dividedcontainer}></View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
  },

  function: {
    color: 'grey',
  },
  gramandvalue: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'space-between',
  },
  comment: {
    marginLeft: 10,
  },

  unitgramcontainaer: {
    flexDirection: 'row',
  },
  text: {
    color: 'grey',
  },
  unitgram: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 13,
  },
  circlecalorie: {
    marginRight: 15,
  },
  dividedcontainer: {
    borderColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    marginLeft: 55,
  },
});
