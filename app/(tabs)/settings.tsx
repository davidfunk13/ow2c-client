import { View, Switch, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Screen, Card, ThemedText } from '@/components/ui';

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <Screen>
      <Card>
        <ThemedText variant="title" style={{ marginBottom: theme.spacing.md }}>
          Appearance
        </ThemedText>
        <View style={styles.row}>
          <ThemedText variant="body">Dark Mode</ThemedText>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.colors.text.disabled, true: theme.colors.primary.main }}
            thumbColor={theme.colors.text.primary}
          />
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
