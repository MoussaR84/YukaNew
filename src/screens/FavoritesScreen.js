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
      <Text style={styles.text}>Favorites Pont Familhy Screen</Text>
      <Text style={styles.text2}>Favorites Pont Familhy Screen</Text>
      <Text style={styles.text3}>Favorites Pont Famlhy Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontFamily: 'Roboto-Light',
  },
  text3: {
    fontFamily: 'Poppins-Regular',
  },
});

export default FavoritesScreen;
