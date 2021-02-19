import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ratingIconColor, ratingProductComment} from '../Product/productParser';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Ratings = ({nutrition_grade_fr}) => {
  return (
    <View style={styles.horizontalLine}>
      {nutrition_grade_fr ? (
        <FontAwesome
          name="circle"
          size={14}
          style={styles.productIcon}
          color={ratingIconColor(nutrition_grade_fr)}
        />
      ) : (
        <AntDesign
          name="closecircleo"
          size={14}
          style={styles.productIcon}
          color={ratingIconColor(nutrition_grade_fr)}
        />
      )}
      <Text style={styles.productItem}>
        {ratingProductComment(nutrition_grade_fr)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  horizontalLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingProductComment: {
    paddingLeft: 5,
  },
  productTitle: {
    fontFamily: 'Roboto-Light',
    color: colors.greyProductTitle,
    fontWeight: '900',
    fontSize: 14,
  },

  productItem: {
    fontFamily: 'Roboto-Light',
    color: colors.greyText,
    fontWeight: '900',
    fontSize: 12,
  },
  productIcon: {
    paddingRight: 5,
  },
  //
});
export default Ratings;
