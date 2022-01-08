import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar'
import { useState } from 'react'

import Films from './Pages/Films/Films'

const App = () => {

  
  const [dark, setDark] = useState(true);

  const prefersDarkMode = useMediaQuery( dark ? '(prefers-color-scheme: dark )' : '(prefers-color-scheme: light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }
        ),
    [prefersDarkMode],
  );
   
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ResponsiveAppBar dark={dark} setDark={setDark}/>
      <Films />
    </ThemeProvider>
  );
}
export default App;