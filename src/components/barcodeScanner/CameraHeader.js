import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors';
const {width, height} = Dimensions.get('screen');

const CameraHeader = ({handleFlash, flashOn}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconSet}>
        <TouchableOpacity onPress={handleFlash}>
          <View style={styles.icons}>
            <Entypo name="flashlight" size={18} color={colors.greyText} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={flashOn}>
          <View style={styles.icons}>
            <AntDesign name="sound" size={18} color={colors.greyText} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.square} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    justifyContent: 'center',
    padding: 40,
    flex: 1,
  },
  iconSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },

  icons: {
    borderRadius: 35,
    backgroundColor: colors.greyLightLine,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  square: {
    height: height / 3,
    margin: 'auto',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
  },
});
export default CameraHeader;
