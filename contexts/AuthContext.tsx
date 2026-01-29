import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from 'react';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { router } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { config } from '../config';
import { storage } from '../lib/storage';
import { api } from '../lib/api';
import { AuthService } from '../lib/services/AuthService';
import { useAuthDeepLink } from '../hooks/useAuthDeepLink';
import type { AuthState } from '../types';

interface AuthContextValue extends AuthState {
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const queryClient = useQueryClient();
  const authService = useMemo(() => new AuthService(storage, api, config), []);

  const fetchUser = useCallback(async (token: string) => {
    try {
      const user = await authService.fetchUser();
      setState({
        user,
        token,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch {
      await authService.clearToken();
      setState({
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  }, [authService]);

  const handleAuthCallback = useCallback(async (url: string) => {
    const { token } = authService.parseCallbackUrl(url);

    if (token) {
      await authService.saveToken(token);
      await fetchUser(token);
      router.replace('/(tabs)');
    }
  }, [authService, fetchUser]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await authService.getStoredToken();
      if (token) {
        await fetchUser(token);
        return;
      }
      setState(prev => ({ ...prev, isLoading: false }));
    };

    checkAuth();
  }, [authService, fetchUser]);

  useAuthDeepLink(handleAuthCallback);

  const login = useCallback(async () => {
    const authUrl = authService.buildAuthUrl(Platform.OS);

    if (Platform.OS === 'web') {
      window.location.href = authUrl;
      return;
    }

    const redirectUrl = 'ow2c://auth/callback';
    const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl);

    if (result.type === 'success' && result.url) {
      await handleAuthCallback(result.url);
    }
  }, [authService, handleAuthCallback]);

  const logout = useCallback(async () => {
    await authService.logout();
    queryClient.clear();
    setState({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,
    });
  }, [authService, queryClient]);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
