import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScanScreen from '../screens/ScanScreen';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        style: {backgroundColor: '#5DCC71'},
      }}>
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/Icon/iconcatogorie/carotticon.jpg')}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: () => {
            return <Icon name="scan1" size={24} color="#900" />;
          },
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/Icon/iconcatogorie/carotticon.jpg')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
