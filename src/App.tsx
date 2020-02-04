import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistentState from './utils/usePersistentState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';
import Header from './Components/Header';

const App = () => {
  const [theme, setTheme] = usePersistentState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
  <ThemeProvider theme={theme} >
    <div className="App">
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
    </div>
  </ThemeProvider>
  );
}

export default App;
