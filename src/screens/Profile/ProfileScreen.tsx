import React, { useState } from 'react'
import { View, Image, Switch, Text, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { Background } from '../../components/Background/Background';
import { StyledButton, StyledText, StyledTextInput, StyledTextInputContainer } from '../../components/GlobalStyled/GlobalStyled';
import { updateAccount } from '../../redux/reducers/accountReducer/AccountReducer';
import { useReduxDispatch, useReduxSelector } from '../../redux/store';


export const ProfileScreen: React.FC = () => {

  const theme = useTheme();
  const value = useReduxSelector(state => state.account);
  const [user, setUser] = useState({ value: value.user_name })
  const dispatch = useReduxDispatch();


  const [themeAutomatic, setThemeAutomatic] = useState(value.user_theme_automatic);
  const [themeManual, setThemeManual] = useState(value.user_theme_manual);

  const toggleSwitchAuto = () => {
    console.log("hola aqui", {value})
    setThemeAutomatic(previousState => !previousState);
    setThemeManual(false);
  };
  const toggleSwitchManual = () => setThemeManual(previousState => !previousState);

  const { top } = useSafeAreaInsets();

  const update = () => {
    dispatch(updateAccount({
      user_id: '1',
      user_name: user.value,
      user_description: value.user_description,
      user_image: '',
      user_theme_manual: themeManual,
      user_theme_automatic: themeAutomatic,
    }));
  }

  return (
    <ScrollView>
    <Background>
      <View style={{ top: top + 20 }}>
        <View style={{flex: 1, alignSelf: 'center', maxHeight: 160}}>
          <Image style={{borderRadius: 100, width: 150, height: 150}} source={require('../../../assets/images/avatar.png')}/>
        </View>
        <View style={{flex: 1, marginTop: 50}}>
          <StyledTextInputContainer>
            <StyledTextInput 
              placeholder='User' 
              placeholderTextColor={theme.colors.common.gray}  
              value={ user.value } 
              editable={false}
            />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <StyledTextInput 
              placeholder='Description' 
              placeholderTextColor={theme.colors.common.gray}  
              value={ value.user_description } 
            />
          </StyledTextInputContainer>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlignVertical: 'center', fontSize: 24, fontWeight: 'bold'}}>
              Theme Mode Automatic
            </Text>
            <Switch
              trackColor={{ false: theme.colors.common.darkGray, true: theme.colors.primary }}
              thumbColor={themeAutomatic ? theme.colors.common.darkGray : theme.colors.primary}
              onValueChange={toggleSwitchAuto}
              value={themeAutomatic}
              style={{marginLeft: 10}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{textAlignVertical: 'center', fontSize: 24, fontWeight: 'bold'}}>
              Theme Mode Light/Dark
            </Text>
            <Switch
              trackColor={{ false: theme.colors.common.darkGray, true: theme.colors.primary }}
              thumbColor={themeManual ? theme.colors.common.darkGray : theme.colors.primary}
              onValueChange={toggleSwitchManual}
              value={themeManual}
              style={{marginLeft: 10}}
              disabled={themeAutomatic}
            />
          </View>
          <StyledButton style={{alignSelf: 'center'}} onPress={ update } activeOpacity={ 0.5 }>
            <StyledText>Login</StyledText>
          </StyledButton>
        </View>
      </View>
    </Background>
    </ScrollView>
  )
}
