import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { Background } from '../../components/Background/Background';
import { RootStackParamList } from '../../types';
import { StyledButton, StyledText, StyledTextInput, StyledTextInputContainer } from '../../components/GlobalStyled/GlobalStyled';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import { pickImage, askForPermission } from '../../hooks/pickImage';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;



export const CreateProfile: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();


    const [selectedImage, setSelectedImage] = useState('');
    const [userName, setUserName] = useState('');

    const saveProfile = () => {
        navigation.navigate('Root');
    }

    const handleProfileImage = async () => {
        const permission = await askForPermission();
        if (permission === 'granted') {
            const result = await pickImage();
            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }
        }
    }

    return (
        <Background>
            <TouchableOpacity
                onPress={handleProfileImage}
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    backgroundColor: theme.colors.common.gray,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                { !selectedImage ? 
                    <Ionicons 
                        name="camera" 
                        size={60} 
                        color={theme.colors.common.white} 
                    /> : 
                    <Image 
                        source={{uri: selectedImage}} 
                        style={{ width: 120, height: 120, borderRadius: 120 }} 
                    /> 
                }
            </TouchableOpacity>
            <StyledTextInputContainer>
                <StyledTextInput 
                    placeholder='User Name' 
                    placeholderTextColor={theme.colors.common.gray} 
                    value={ userName } 
                    onChangeText={(text) => setUserName(text)}
                />
            </StyledTextInputContainer>
            <StyledButton onPress={saveProfile}>
                <StyledText>Create</StyledText>
            </StyledButton>
        </Background>
    )
}
