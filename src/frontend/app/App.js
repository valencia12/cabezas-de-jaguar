import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import './App.css';
import RouterCa from './router/RouterCa';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Max Rounded'
  },
  palette: {
    primary: {
      main: '#485922'
    }
  }
});

console.log('Loaded');

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <RouterCa />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);