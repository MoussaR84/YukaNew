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
const HistoryItem = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.contenaireProduct}>
        <View style={styles.card}>
          <View style={styles.product}>
            <Image
              style={{height: 100, width: 80, borderRadius: 10}}
              source={{uri: item.image_url}}
            />
          </View>
          <View style={styles.presentation}>
            <Text style={styles.nameProduct}>{item.product_name}</Text>
            <Text style={styles.brand}>{item.brands}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
