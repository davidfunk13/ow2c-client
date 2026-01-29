import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Screen, ThemedText, Button } from '@/components/ui';

export default function LoginScreen() {
  const { login } = useAuth();
  const { theme } = useTheme();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login();
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={[styles.content, { padding: theme.spacing.lg }]}>
        <ThemedText variant="stat" style={[styles.title, { marginBottom: theme.spacing.sm }]}>
          OW2C
        </ThemedText>
        <ThemedText variant="secondary" style={[styles.subtitle, { fontSize: theme.font.lg }]}>
          Overwatch 2 Stats Tracker
        </ThemedText>

        {isLoggingIn ? (
          <View
            style={[
              styles.loadingButton,
              {
                backgroundColor: theme.colors.primary.main,
                paddingHorizontal: theme.spacing.xl,
                paddingVertical: theme.spacing.md,
                borderRadius: theme.radius.sm,
              },
            ]}
          >
            <ActivityIndicator color={theme.colors.text.primary} />
          </View>
        ) : (
          <Button title="Login with Battle.net" onPress={handleLogin} />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
  },
  subtitle: {
    marginBottom: 48,
  },
  loadingButton: {
    minWidth: 200,
    alignItems: 'center',
    opacity: 0.7,
  },
});
