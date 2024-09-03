import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1abc9c',
    },
    secondary: {
      main: '#f39c12', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
  },
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

// ThemeProviderWrapper komponent
const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;