import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
        style: styles.container,
      }}>
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          style: styles.icons,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../assets/TabBar/active_history.png')}
                style={{width: 25, height: 25}}
              />
            ) : (
              <Image
                source={require('../assets/TabBar/inactive_history.png')}
                style={{width: 30, height: 30}}
              />
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
              <Image
                source={require('../assets/TabBar/active_yuka.png')}
                style={{width: 25, height: 25}}
              />
            ) : (
              <Image
                source={require('../assets/TabBar/inactive_yuka.png')}
                style={{width: 30, height: 30}}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5DCC71',
    paddingVertical: 'auto',
  },
  icons: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
});

export default TabNavigator;
