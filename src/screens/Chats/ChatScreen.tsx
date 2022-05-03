import React from 'react'
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../../components/Background/Background';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { NewChatButton } from '../../components/NewChatButton/NewChatButton';

// To be changed in the future
const DATA = [
  {
      id: '1',
      user: 'David',
      message: 'Hola que tal?',
      time: '12:00',
      avatar: require('../../../assets/images/test.png')
  },
  {
      id: '2',
      user: 'Maureen',
      message: 'Hola que tal?',
      time: '12:00',
      avatar: ''

  },
  {
      id: '3',
      user: 'Julio',
      message: 'aiwjdladfoaisih',
      time: '12:00',
      avatar: ''

  },
];

export const ChatScreen: React.FC = () => {

  return (
    <Background>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatItem item={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewChatButton />
    </Background>
  )
}
