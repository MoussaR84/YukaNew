import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
const CameraHeader = ({handleFlash, flashOn}) => {
  return (
    <View style={styles.bottomOverlay}>
      <TouchableOpacity onPress={() => handleFlash}>
        <View style={styles.iconSet}>
          {/* <Entypo name="flashlight" size={24} color="black" />
          <AntDesign name="sound" size={24} color="black" /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 10,
  },
});
export default CameraHeader;
