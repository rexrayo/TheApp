import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet } from 'react-native'
import { RootStackParamList } from '../../types';
import { StyledButton, StyledHeader, StyledLogo, StyledText, StyledTextInput, StyledTextInputContainer } from '../../components/GlobalStyled';
import { device } from '../../constant';
import { storeData } from '../../hooks/useToken';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [user, setUser] = useState({ value: '', error: '' })
  
  const login = () => {
    storeData( user.value );
    navigation.navigate('Root');
  }


  return (
    <ImageBackground 
      source={require('../../../assets/images/dot.png')}
      style={styles.background}
      resizeMode="repeat"
    >
      <StyledLogo source={require('../../../assets/images/kal-black.png')}/>
      <StyledHeader>Welcome Back</StyledHeader>

      <StyledTextInputContainer>
        <StyledTextInput placeholder='User' value={ user.value } onChangeText={(text) => setUser({ value: text, error: '' })}/>
      </StyledTextInputContainer>

      <StyledButton onPress={ login } activeOpacity={ 0.5 }>
        <StyledText>Login</StyledText>
      </StyledButton>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: device.width,
    height: device.height,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})
