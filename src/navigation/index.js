import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScanScreen from '../screens/ScanScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

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
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/active_history.png')}
                  style={styles.iconSize}
                />
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/inactive_history.png')}
                  style={styles.iconSize}
                />
              </View>
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
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/active_yuka.png')}
                  style={styles.iconSize}
                />
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/inactive_yuka.png')}
                  style={styles.iconSize}
                />
              </View>
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
              <View style={styles.tabBarIconstar}>
                <Entypo name="star" size={30} color="white" />
              </View>
            ) : (
              <View style={styles.tabBarIconstar}>
                <Entypo name="star" size={30} color={colors.greenLight} />
              </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderTopColor: '#F7F7F7',
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSize: {
    width: 30,
    height: 30,
  },
  tabBarIcon: {
    paddingTop: 10,
  },
  tabBarIconstar: {
    paddingTop: 5,
  },
});

export default TabNavigator;
