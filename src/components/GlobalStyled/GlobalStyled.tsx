import styled from 'styled-components/native'
import { device } from '../../constant';

const { width, height } = device;


export const StyledButton = styled.TouchableOpacity`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.large};
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
`;

export const StyledText = styled.Text`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.text};
`;

export const SignTextMode = styled.Text`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.common.gray};
`;

export const StyledLogo = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
    resize-mode: contain;
`;

export const StyledImage = styled.Image`
    max-width: 100%;
    height: ${ height - 200 }px;
    background-color: ${props => props.theme.colors.primary};
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
`;

export const StyledChatLogo = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
    resize-mode: contain;
    position: absolute; 
    top: 0; 
    right: 0; 
    opacity: 0.2;
`;

export const StyledHeader = styled.Text`
    font-size: ${props => props.theme.fontSizes.title};
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    padding-vertical: 12px;
`;

export const StyledTextInput = styled.TextInput`
    font-size: ${props => props.theme.fontSizes.large};
    text-align-vertical:top;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.surface};
    width: 300px;
`;

export const StyledTextInputContainer = styled.View`
    background: ${props => props.theme.colors.surface};
    border-radius: 5px;
    color: black;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 10px;
    margin-horizontal: 10px;
    margin-vertical: 15px;
    padding-vertical: 5px;
    shadow-color: ${props => props.theme.colors.text};
    shadow-opacity: 1;
    shadow-radius: 15px;
    elevation: 10;
    border: 1px solid ${props => props.theme.colors.common.gray};
`;