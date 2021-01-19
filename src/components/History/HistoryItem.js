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
const HistoryItem = (item) => {
  console.log('bdxzabdgdzaaddagdgtftftyfftftfgd', productHistory);

  return (
    // <View>
    //   <Text>produititem</Text>
    // </View>
    <>
      <Image
        style={{height: 100, width: 80, borderRadius: 10}}
        source={{uri: item.image_url}}
      />
      <Text style={styles.nameProduct}>{item.product_name}</Text>
      <Text style={styles.brand}>{item.brands}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HistoryItem;
