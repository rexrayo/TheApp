import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';


const darkTheme = {
  dark: true,
  colors: {
    common: {
      white: '#ffffff',
      black: '#000000',
      gray: '#c5c5c5',
      darkGray: '#828282',
    },
    background: '#121212',
    surface: '#202020',
    text: '#ffffff',
    primary: '#006978',
    error: '#ff0D10'
  },
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "25px",
    title: "40px"
  }
};

const lightTheme = {
  dark: false,
  colors: {
    common: {
      white: '#ffffff',
      black: '#000000',
      gray: '#c5c5c5',
      darkGray: '#828282',
    },
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#000000',
    primary: '#56c8d8',
    error: '#ff0D10'
  },
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "25px",
    title: "40px"
  }
};

export const MainTheme: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={(colorScheme === 'dark') ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}