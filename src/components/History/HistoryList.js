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
import {TouchableHighlight} from 'react-native-gesture-handler';
const HistoryList = (item) => {
  console.log(item, 'rtrtrtrtrtrtrt');

  return (
    <View>
      <Text>{item.product_name}</Text>
      <Text>{item.brands}</Text>
      <Text>salut</Text>
    </View>
  );
};

export default HistoryList;
