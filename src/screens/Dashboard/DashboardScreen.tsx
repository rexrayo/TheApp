import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const DashboardScreen: React.FC = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View>
      <Text style={{top: top + 20}}>DashboardScreen</Text>
    </View>
  )
}
