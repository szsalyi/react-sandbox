import { useState } from 'react';
import { themes } from '../theme/theme';
import { setStorageItem, getStorageItem } from '../utils/storage';

export type AppTheme = 'light' | 'dark';

export const useAppTheme = () => {
  const [theme, setTheme] = useState<AppTheme>((getStorageItem('theme') as AppTheme) || 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setStorageItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return {
    currentTheme: themes[theme],
    themeType: theme,
    setTheme,
    toggleTheme,
  };
};
