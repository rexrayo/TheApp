import styled from 'styled-components/native'


export const NewChatButtonView = styled.View`
    background-color: ${props => props.theme.colors.primary};
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;