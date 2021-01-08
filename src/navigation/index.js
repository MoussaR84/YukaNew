import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScanScreen from '../screens/ScanScreen';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
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
          // tabBarIcon: ({color, size}) => (
          //   <FontAwesome5 name="carrot" size={24} color={color} />
          // ),
        }}
      />

      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        // options={{
        //   tabBarLabel: 'Scan',
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons
        //       name="barcode-scan"
        //       size={24}
        //       color={color}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
