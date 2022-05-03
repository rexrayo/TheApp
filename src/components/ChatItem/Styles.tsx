import styled from 'styled-components/native'

type ChatText = {
    fontzise?: number,
    color?: string,
    fontWeight?: string,
}

export const ChatText = styled.Text<ChatText>`
    font-size: ${props => props.fontzise || 16}px;
    color: ${props => props.color || props.theme.colors.text};
    font-weight: ${props => props.fontWeight || 'normal'};
`;

export const ChatAvatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 15px;
`;

export const ChatItemView = styled.View`
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
    padding: 10px;
`;

export const ChatItemMidView = styled.View`
    flex-direction: row;
    
`;

export const ChatItemContentView = styled.View`
    justify-content: space-around;
    
`;