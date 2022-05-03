import React from 'react'
import moment from 'moment';
import { ChatMessageProps } from '../../types';
import { MessageBox, MessageName, MessageText, MessageTime, MessageView } from './Styles';


export const Message = (props: ChatMessageProps) => {

  const { message, myId } = props;


  const isMyMessage = () => {
    return message.user.id === myId;
  }
  return (
    <MessageView>
      <MessageBox isMyMessage={isMyMessage()}>
        { !isMyMessage() && <MessageName>{ message.user.user }</MessageName> }
        <MessageText isMyMessage={isMyMessage()}>{ message.content }</MessageText>
        <MessageTime>{ moment(message.createdAt).fromNow() }</MessageTime>
      </MessageBox>
    </MessageView>
  )
}