import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigations/index';
import { MainTheme } from './src/themes/MainTheme';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainTheme>
          <RootNavigator/>
          <StatusBar style="auto" />
        </MainTheme>
      </SafeAreaProvider>
    </Provider>
  );
}