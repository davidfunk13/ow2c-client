import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { storage } from '../../lib/storage';

export default function AuthCallback() {
  const { token, error } = useLocalSearchParams<{ token?: string; error?: string }>();

  useEffect(() => {
    const handleCallback = async () => {
      const isWeb = Platform.OS === 'web';

      if (error) {
        if (isWeb) {
          window.location.href = '/';
          return;
        }
        router.replace('/(auth)');
        return;
      }

      if (!token) {
        if (isWeb) {
          window.location.href = '/';
          return;
        }
        router.replace('/(auth)');
        return;
      }

      await storage.setToken(token);
      if (isWeb) {
        window.location.href = '/';
        return;
      }
      router.replace('/(tabs)');
    };

    handleCallback();
  }, [token, error]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#00aeff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
});
