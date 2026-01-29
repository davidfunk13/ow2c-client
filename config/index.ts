import { Platform } from 'react-native';
import * as Device from 'expo-device';

const getDevApiUrl = () => {
  // 1. Check env var first (set in .env.local)
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // 2. Auto-detect as fallback
  if (Platform.OS === 'web') {
    return 'http://localhost:8000';
  }

  if (Platform.OS === 'android') {
    return Device.isDevice
      ? 'http://192.168.0.132:8000'  // Real device - update this if IP changes
      : 'http://10.0.2.2:8000';       // Emulator
  }

  // iOS
  return 'http://localhost:8000';
};

export const config = {
  apiUrl: __DEV__ ? getDevApiUrl() : 'https://api.yoursite.com',
} as const;
