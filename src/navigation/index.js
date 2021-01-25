import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScanScreen from '../screens/ScanScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import active_history from '../assets/TabBar/active_history.png';
// import active_yuka from '../assets/TabBar/active_yuka.png';
// import inactive_history from '../assets/TabBar/inactive_history.png';
// import inactive_yuka from '../assets/TabBar/inactive_yuka.png';

const Tab = createBottomTabNavigator();
const TabNavigator = ({tintColor}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: '#5DCC71',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <FontAwesome name="history" size={30} color="white" />
            ) : (
              <FontAwesome name="history" size={25} color="white" />
            );
          },
        }}
      />

      <Tab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialCommunityIcons
                name="barcode-scan"
                size={30}
                color="white"
              />
            ) : (
              <MaterialCommunityIcons
                name="barcode-scan"
                size={25}
                color="white"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Entypo name="star" size={30} color="white" />
            ) : (
              <Entypo name="star" size={25} color="white" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
