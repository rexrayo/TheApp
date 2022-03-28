import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigations/index';
import { MainTheme } from './src/themes/LightTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainTheme>
        <RootNavigator/>
        <StatusBar style="auto" />
      </MainTheme>
    </SafeAreaProvider>
  );
}