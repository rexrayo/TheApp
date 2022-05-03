import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList } from 'react-native'
import { Background } from '../../components/Background/Background'
import { StyledChatLogo } from '../../components/GlobalStyled/GlobalStyled'
import { InputMessage } from '../../components/InputMessage/InputMessage'
import { Message } from '../../components/Message/Message'
import Chats from '../../data/Chats'
import {  RootStackParamList } from '../../types'

// Navigation props
type Props = NativeStackScreenProps<RootStackParamList, 'ChatRoom'>;


export const ChatRoomScreen: React.FC<Props> = ({route}) => {
    const { id } = route.params;
    return (
        <Background>
            <StyledChatLogo source={require('../../../assets/images/kal-black.png')}/>
            <FlatList
                data={Chats.messages}
                renderItem={({ item }) => <Message myId={id} message={item} />}
            />

            {/* <InputMessage /> */}
        </Background>
    )
}
