import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/index';
import AsyncStorage from './src/asyncStorage/index';

export default function App({listData}) {
  return (
    <NavigationContainer>
      <TabNavigator listData={listData} />
    </NavigationContainer>
  );
}
