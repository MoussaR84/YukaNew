import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{fontFamily: "Roboto-Light"}}>My awesome font</Text>; */}
      <Text style={styles.text}>FavoritesScreen</Text>
      {/* <Icon name="scan1" size={24} color="#900" />
      <Entypo name="circle" size={24} color="#900" />
      <FontAwesome5 name="circle" size={24} color="#600" />
      <FontAwesome name="circle" size={24} color="#600" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontFamily: "Roboto-Light",
  }
});

export default FavoritesScreen;
