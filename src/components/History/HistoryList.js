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

const HistoryList = ({history}) => {
  return history.map((product) => {
    return <HistoryItem product={product} />;
  });
};
export default HistoryList;
