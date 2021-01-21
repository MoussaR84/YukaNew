import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import colors from '../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageCard = ({image_url}) => {
  return image_url ? (
    <Image style={styles.cardImage} source={{uri: image_url}} />
  ) : (
    <View style={styles.cardImage}>
      <MaterialCommunityIcons
        name="image-outline"
        size={60}
        style={styles.cardImage}
        color={colors.greyText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 80,
    width: 60,
    borderRadius: 10,
  },
});
export default ImageCard;
