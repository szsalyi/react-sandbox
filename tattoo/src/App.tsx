import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { LoadingProvider } from './context/LoadingContext';
import { useAppTheme } from './hooks/useAppTheme.hook';
import { AppRouter } from './router/AppRouter';
import { themes } from './theme/theme';

const App: React.FC = () => {
  const { themeType, toggleTheme } = useAppTheme();
  const [appliedTheme, setAppliedTheme] = useState(themeType);

  useEffect(() => {
    setAppliedTheme(themeType);
  }, [themeType]);

  return (
    <ThemeProvider theme={themes[appliedTheme]}>
      <LoadingProvider>
        <Header setTheme={toggleTheme} theme={appliedTheme} />
        <AppRouter />
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
