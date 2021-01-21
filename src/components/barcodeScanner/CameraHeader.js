import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CameraHeader = ({handleFlash, flashOn}) => {
  return (
    <View style={styles.bottomOverlay}>
      <TouchableOpacity onPress={() => handleFlash}>
        <View style={styles.iconSet}>
          <View style={styles.flashlight}>
            <Entypo name="flashlight" size={30} color="black" />
          </View>
          <View style={styles.sound}>
            <AntDesign name="sound" size={30} color="black" />
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

  flashlight: {
    borderRadius: 30,
    backgroundColor: '#fffb',
    height: 35,
    width: 35,
    alignItems: 'center',
  },

  sound: {
    borderRadius: 25,
    backgroundColor: '#fffb',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: 180,
    width: 250,
    borderColor: 'white',
    borderWidth: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
    marginTop: 150,
  },
});
export default CameraHeader;
