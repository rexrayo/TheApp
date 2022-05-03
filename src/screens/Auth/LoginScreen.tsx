import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SignTextMode, StyledButton, StyledHeader, StyledLogo, StyledText, StyledTextInput, StyledTextInputContainer } from '../../components/GlobalStyled/GlobalStyled';
import { Background } from '../../components/Background/Background';
import { useColorScheme, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { SignData } from '../../types/index';
import { signUp, signIn } from '../../../firebase';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [user, setUser] = useState<SignData>({email: '', password: ''});
  const [mode, setMode] = useState('signUp');

  const colorScheme = useColorScheme();
  const theme = useTheme();
  

  const login = async () => {
    // if (mode === 'signUp') {
    //   await signUp({
    //     email: user.email, 
    //     password: user.password
    //   }).then(res => {
    //     if (res.user) {
    //       navigation.navigate('Root');
    //     }
    //   })
    // } else {
    //   await signIn({
    //     email: user.email, 
    //     password: user.password
    //   }).then(res => {
    //     if (res.user) {
    //       navigation.navigate('Root');
    //     }
    //   })
    // }
    navigation.navigate('CreateProfile');
  }


  return (
    <Background>
      <StyledLogo source={(colorScheme === 'dark') ? require('../../../assets/images/kal.png') : require('../../../assets/images/kal-black.png')}/>
      <StyledHeader>Welcome Back</StyledHeader>

      <StyledTextInputContainer>
        <StyledTextInput 
          placeholder='Email' 
          placeholderTextColor={theme.colors.common.gray} 
          value={ user.email } 
          onChangeText={(text) => setUser({...user, email: text})}
        />
      </StyledTextInputContainer>

      <StyledTextInputContainer>
        <StyledTextInput 
          placeholder='Password' 
          placeholderTextColor={theme.colors.common.gray} 
          secureTextEntry={true}
          value={ user.password } 
          onChangeText={(text) => setUser({...user, password: text })}
        />
      </StyledTextInputContainer>

      <StyledButton onPress={ login } activeOpacity={ 0.5 }>
        <StyledText>{(mode === 'signUp' ? 'Create' : 'Login')}</StyledText>
      </StyledButton>
      <TouchableOpacity onPress={ () => setMode( (mode === 'signUp') ? 'signIn' : 'signUp') }>
        <SignTextMode>{ mode === 'signUp' ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up' }</SignTextMode>
      </TouchableOpacity>
    </Background>
  )
}


