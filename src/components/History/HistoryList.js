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
const HistoryList = (props) => {
  //ajouter les props pour HistoryItem;
  // return (<HistoryItem/>);
  console.log('bdxzabdgdzaaddagdggd', props);
  return (
    <View>
      {productHistory.map((item) => {
        return <HistoryItem />;
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
