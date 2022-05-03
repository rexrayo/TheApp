import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { NewChatButtonView } from './Styles';



export const NewChatButton: React.FC = () => {
    const navigation = useNavigation<any>();
    
    const onPress = () => {
        navigation.navigate('Root');
      }
  return (
    <NewChatButtonView>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="message-reply-text"
          size={28}
          color="white"
        />
      </TouchableOpacity>
    </NewChatButtonView>
  )
}