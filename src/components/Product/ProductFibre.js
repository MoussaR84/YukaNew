import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';

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
  const ratingFibreCircle = (product) => {
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
    <View style={styles.containerfibre}>
      <View style={styles.fibres}>
        <View style={styles.imagefiber}>
          <MaterialCommunityIcons
            name="corn"
            size={40}
            style={styles.circle}
            color="lightgrey"
          />
        </View>
        <View style={styles.fibrecontenerrinfo}>
          <View style={styles.fibercomment}>
            <View style={styles.fibregramandvalue}>
              <Text style={styles.titlefibre}>Fibre</Text>
              <View style={styles.unitandgramfiber}>
                <View style={styles.unitandvaluefiber}>
                  <Text style={styles.textfibre}>
                    {product.nutriments.fiber}
                  </Text>
                  <Text style={styles.textfibre}>
                    {product.nutriments.fiber_unit}
                  </Text>
                </View>

                <View style={styles.circlefiber}>
                  <FontAwesome
                    name="circle"
                    size={20}
                    style={styles.circle}
                    color={ratingFibreCircle(product)}
                  />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.function}>{fiberComment(product)}</Text>
        </View>
        <View style={styles.antdesignicon}>
          <AntDesign name="down" size={20} color="grey" />
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
    width: 220,
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
  unitandvaluefiber: {
    flexDirection: 'row',
    marginRight: 15,
  },
  commentfibre: {
    flexDirection: 'row',
  },
  textfibre: {
    color: 'grey',
  },
  circlefiber: {
    marginRight: 28,
  },
  antdesignicon: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 33,
  },
});
