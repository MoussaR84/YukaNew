import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default ProductBio = ({product}) => {
  const isBioorNot = (product) => {
    if (product.labels_tags[0] === 'en:organic') {
      return 'Produit Biologique';
    } else if (product.labels_tags[0] === undefined) {
      return 'Non noté';
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
            size={30}
            style={styles.circle}
            color="lightgrey"
          />
        </View>
        <View style={styles.biocontainerinfo}>
          <View style={styles.biocomment}>
            <Text style={styles.textbio}>Bio</Text>
            <Text style={styles.function}>{isBioorNot(product)}</Text>
          </View>
  
        <View style={styles.entypoBioorNot}>
          <Entypo name="check" size={15} color={isBioorNotColor(product)} />
        </View>
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
    borderBottomColor: "#DEDEDC",
    borderBottomWidth: 1,
    width: "100%",
    paddingBottom: 10,
    marginLeft: 10,
    height:50,
    flexDirection:"row"
  },
  textbio: {
    fontWeight: '800',
    fontSize: 17,
    fontFamily:"Roboto-Light",
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
    width: 66,
    marginRight: 10,
    alignItems:"flex-end",
    width:120,
  },
});
