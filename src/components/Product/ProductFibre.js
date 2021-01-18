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
      <View style={styles.fibres}>
        <View style={styles.imagefiber}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/Icon/iconcatogorie/fiber.png')}
          />
        </View>
        <View style={styles.fibrecontenerrinfo}>
          <View style={styles.fibercomment}>
            <View style={styles.fibregramandvalue}>
              <Text style={styles.titlefibre}>Fibre</Text>
              <View style={styles.unitandgramfiber}>
                <Text style={styles.textfibre}>{product.nutriments.fiber}</Text>
                <Text style={styles.textfibre}>
                  {product.nutriments.fiber_unit}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{fiberComment(product)}</Text>
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
  fibrecontenerrinfo: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 300,
    paddingBottom: 10,
    marginLeft: 10,
  },
  titlefibre: {
    fontWeight: '600',
    fontSize: 15,
  },
  function: {
    color: 'grey',
  },
  fibres: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fibregramandvalue: {
    flexDirection: 'row',
    width: 237,
    justifyContent: 'space-between',
  },
  unitandgramfiber: {
    flexDirection: 'row',
  },
  commentfibre: {
    flexDirection: 'row',
  },
  textfibre: {
    color: 'grey',
  },
});
