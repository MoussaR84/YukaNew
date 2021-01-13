import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ProductFibre({product}) {
  const fiberComment = (product) => {
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

  return (
    <View style={styles.containerfibre}>
      <View style={styles.commentfibre}>
        <Text style={styles.titlefibre}>Fibre</Text>
        <Text style={styles.function}>{fiberComment(product)}</Text>
      </View>
      <View style={styles.fibrevaluecircle}>
        <View style={styles.fibregramandvalue}>
          <Text>{product.nutriments.fiber}</Text>
          <Text>{product.nutriments.fiber_unit}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerfibre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  titlefibre: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  function:{
    color:"grey",
  },
});
