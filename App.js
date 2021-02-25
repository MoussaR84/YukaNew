import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/index';
import {Provider} from 'react-redux';
import store from './store/index.js';

export default function App({listData}) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator listData={listData} />
      </NavigationContainer>
    </Provider>
  );
}
