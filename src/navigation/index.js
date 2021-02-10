import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScanScreen from '../screens/ScanScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import colors from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const TabNavigator = ({tintColor}) => {
  const [listData, setlistData] = useState([]);
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
        listData={listData}
        options={{
          style: styles.icons,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/active_history.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/inactive_yuka.png')}
                  style={{width: 30, height: 30}}
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
                  style={{width: 25, height: 25}}
                />
              </View>
            ) : (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/inactive_yuka.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        listData={listData}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.tabBarIcon}>
                <Image
                  source={require('../assets/TabBar/active_yuka.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            ) : (
              <View style={styles.tabBarIconstar}>
                <Entypo name="star" size={30} color="#f0eff4" />
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
  tabBarIcon: {
    paddingTop: 10,
  },
  tabBarIconstar: {
    paddingTop: 5,
  },
});

export default TabNavigator;
