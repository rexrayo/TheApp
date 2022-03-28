import React from 'react';
import { ThemeProvider } from 'styled-components/native';

const mainTheme = {
  colors: {
    common: {
      white: '#FFF',
      black: '#000',
      gray: 'rgba(200,200,200,0.9)',
    },
    background: '#FFF',
    text: '#000',
    primary: '#798deb',
    error: '#FF0D10'
  },
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "25px",
    title: "40px"
  }
};

export const MainTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    {children}
  </ThemeProvider>
);