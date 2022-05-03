import React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import { ChatParamItem } from '../../types'
import { useNavigation } from '@react-navigation/native';
import { ChatAvatar, ChatItemContentView, ChatItemMidView, ChatItemView, ChatText } from './Styles';


export const ChatItem: React.FC<ChatParamItem> = ({item}) => {
    
    const navigation = useNavigation<any>();

    const openChat = () => {
      navigation.navigate('ChatRoom', {
        user: item.user,
        id: item.id
      });
    };

  return (
    <TouchableWithoutFeedback onPress={openChat} >
      <ChatItemView>
        <ChatItemMidView>
          <ChatAvatar source={(item.avatar !== '') ? item.avatar : require('../../../assets/images/avatar.png')} />

          <ChatItemContentView>
            <ChatText fontWeight='bold'>{item.user}</ChatText>
            <ChatText numberOfLines={ 2 } color='#a5a5a5'>{item.message}</ChatText>
          </ChatItemContentView>

        </ChatItemMidView>

        <ChatText fontzise={ 14 } color='#a5a5a5'>
          {item.time}
        </ChatText>

      </ChatItemView>  
    </TouchableWithoutFeedback>
  )
}
