import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components';
import { device } from '../../constant';


export const Background: React.FC = ({ children }) => {
const theme = useTheme();

  return (
    <ImageBackground 
      source={(theme.dark) ? require('../../../assets/images/dot_dark.png') : require('../../../assets/images/dot.png')}
      style={{...styles.background, backgroundColor: theme.colors.background}}
      resizeMode="repeat"
    >
      { children }
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
  }
})