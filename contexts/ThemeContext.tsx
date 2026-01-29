import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { darkTheme, lightTheme, type Theme } from '@/constants/theme';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = 'theme';

async function getStoredTheme(): Promise<string | null> {
  if (Platform.OS === 'web') {
    return localStorage.getItem(THEME_STORAGE_KEY);
  }
  return SecureStore.getItemAsync(THEME_STORAGE_KEY);
}

async function setStoredTheme(value: string): Promise<void> {
  if (Platform.OS === 'web') {
    localStorage.setItem(THEME_STORAGE_KEY, value);
    return;
  }
  await SecureStore.setItemAsync(THEME_STORAGE_KEY, value);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    getStoredTheme().then((stored) => {
      if (stored === null) return;
      setIsDark(stored === 'dark');
    });
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setStoredTheme(newIsDark ? 'dark' : 'light');
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
