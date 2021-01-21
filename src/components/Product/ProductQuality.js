import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../assets/colors';

export default ProductQuality = ({product}) => {
  return (
    <View style={styles.qualityTitle}>
      <Text style={styles.qualite}>Qualités</Text>
      <Text style={styles.portion}>
        Pour {product.nutrition_data_prepared_per}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  qualityTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    },
  qualite: {
    fontWeight: "600",
    fontSize: 15,

  },
});
