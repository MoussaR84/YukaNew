import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors';

const CameraHeader = ({handleFlash, flashOn}) => {
  return (
    <View style={styles.bottomOverlay}>
      <TouchableOpacity onPress={() => handleFlash}>
        <View style={styles.iconSet}>
          <View style={styles.icons}>
            <Entypo name="flashlight" size={18} color={colors.greyText} />
          </View>
          <View style={styles.icons}>
            <AntDesign name="sound" size={18} color={colors.greyText} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.square}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '25%',
    marginRight: 1200,
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
    height: 180,
    width: 250,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
    marginTop: 150,
  },
});
export default CameraHeader;
