import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroidBase,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
// import { Entypo } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
import {
  sugarComment,
  sugarCircle,
  satfatComment,
  satfatCircle,
  caloriecirclecolor,
  isBioorNot,
  isBioorNotColor,
  textProteine,
  ratingProteineCircle,
  ratingFibreCircle,
  fiberComment,
  calorieComment,
  ratingScoreText,
  ratingProduct,
  ratingProductComment,
} from './productParser';

export default ProductQuality = ({product}) => {
  return (
    <View style={styles.qualityTitle}>
      <Text style={styles.qualite}>Qualités</Text>
      <Text style={styles.portion}>
        Pour {product.nutrition_data_prepared_per}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  qualityTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  qualite: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
