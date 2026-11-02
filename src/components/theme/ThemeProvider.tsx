'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyThemeToDOM(newTheme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (newTheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

// Storage event listener for cross-tab sync & external mutations
let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribeToTheme(callback: () => void) {
  listeners.push(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === 'arvin-theme') {
      callback();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    window.removeEventListener('storage', onStorage);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('arvin-theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return 'dark'; // Dark is default per specification
}

function getServerSnapshot(): Theme {
  return 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  // Keep DOM synchronized whenever theme snapshot changes
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('arvin-theme', newTheme);
      applyThemeToDOM(newTheme);
      emitChange();
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
