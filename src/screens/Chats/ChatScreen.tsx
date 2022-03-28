import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ChatScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  

  return (
    <Text style={{top: top + 20}}>ChatScreen</Text>
  )
}
