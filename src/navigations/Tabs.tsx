import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatScreen } from '../screens/Chats/ChatScreen';
import { DashboardScreen } from '../screens/Dashboard/DashboardScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { TabsParamList } from '../types/index';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator<TabsParamList>();

export default function Tabs() {
  const theme = useTheme();

  return (
      <Tab.Navigator initialRouteName='Dashboard' 
        screenOptions={() => ({
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: 6
          },
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.colors.surface,
          },
          tabBarIconStyle: {
            marginTop: 5
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontSize: 20,
            color: theme.colors.text
          },
        })}
      >
        <Tab.Screen name="Chats" component={ChatScreen}
          options={{
            title: 'KalApp',
            tabBarIcon: () => (
              <Ionicons 
                color={ theme.colors.primary } 
                size={ 25 } 
                name="chatbubble-ellipses"
              />
            )
          }}
        />
        <Tab.Screen name="Dashboard" component={DashboardScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Ionicons 
                    color={ theme.colors.primary } 
                    size={ 25 } 
                    name="apps"
                />
            )
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: () => (
                <Ionicons 
                    color={ theme.colors.primary } 
                    size={ 25 } 
                    name="person"
                />
            )
          }}
        />
      </Tab.Navigator>
  );
}