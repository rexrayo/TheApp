import styled from 'styled-components/native'

type MessageProps = {
    isMyMessage: boolean
}

export const MessageView = styled.View`
    padding: 10px;
`;

export const MessageBox = styled.View<MessageProps>`
    border-radius: 5px;
    padding: 10px;
    background-color: ${props => (props.isMyMessage) ? '#0097a7' : props.theme.colors.surface};
    margin-left: ${props => (props.isMyMessage) ? 50 : 0}px;
    margin-right: ${props => (props.isMyMessage) ? 0 : 50}px;
`;

export const MessageName = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    margin-bottom: 5px;
`;

export const MessageText = styled.Text<MessageProps>`
    color: ${props => (props.isMyMessage) ? props.theme.colors.common.black : props.theme.colors.text};
`;

export const MessageTime = styled.Text`
    align-self: flex-end;
    color: ${props => props.theme.colors.common.gray};
`;