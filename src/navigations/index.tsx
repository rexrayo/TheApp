import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { RootStackParamList } from '../types';
import Tabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ChatRoomScreen } from '../screens/Chats/ChatRoomScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { CreateProfile } from '../screens/Profile/CreateProfile';


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'>
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
                name="CreateProfile" 
                component={CreateProfile} 
            />

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Root" 
                component={Tabs} 
            />
            <Stack.Screen
                name="ChatRoom" 
                component={ChatRoomScreen} 
                options={({ route }) => ({ 
                    title: route.params.user, 
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    }, 
                    headerRight: () => (
                        <>
                            <MaterialCommunityIcons name="dots-vertical" size={22} color={theme.colors.background} />
                        </>
                    )
                })}
                
            />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default RootNavigator;