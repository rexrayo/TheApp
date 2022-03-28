import React from 'react'
import styled from 'styled-components/native'


export const StyledButton = styled.TouchableOpacity`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.common.white};
    font-size: ${props => props.theme.fontSizes.large};
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
`;

export const StyledText = styled.Text`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.large};
`;

export const StyledLogo = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
    resize-mode: contain;
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
    color: ${props => props.theme.colors.common.black};
    width: 300px;
`;

export const StyledTextInputContainer = styled.View`
    background: white;
    border-radius: 5px;
    color: black;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 10px;
    margin-horizontal: 10px;
    margin-vertical: 15px;
    padding-vertical: 5px;
    shadow-color: ${props => props.theme.colors.common.black};
    shadow-opacity: 1;
    shadow-radius: 15px;
    elevation: 10;
    border: 1px solid ${props => props.theme.colors.common.gray};
`;