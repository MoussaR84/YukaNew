import React from 'react';
import HistoryItem from './HistoryItem';
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
const HistoryList = (props) => {
  //ajouter les props pour HistoryItem;
  // return (<HistoryItem/>);
  console.log('bdxzabdgdzaaddagdggd', props);
  return (
    <View>
      {productHistory.map((item) => {
        return (
          <ScrollView>
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
          </ScrollView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerScanScreen: {
    flex: 1,
  },
});

export default HistoryList;
