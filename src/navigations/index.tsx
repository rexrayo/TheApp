import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { RootStackParamList } from '../types';
import Tabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
            
        >
            <Stack.Screen 
                options={{
                    headerShown: false
                }} 
                name="Login" 
                component={LoginScreen} 
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Root" 
                component={Tabs} 
            />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default RootNavigator;