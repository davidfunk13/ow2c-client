import { StyleSheet, View } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Screen, Card, ThemedText } from '@/components/ui';

export default function HomeScreen() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <Screen scroll>
      <View
        style={[
          styles.header,
          {
            paddingHorizontal: theme.spacing.lg,
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.lg,
          },
        ]}
      >
        <ThemedText variant="secondary">Welcome back,</ThemedText>
        <ThemedText variant="heading">{user?.battletag || 'Player'}</ThemedText>
      </View>

      <Card style={styles.cardNoTopMargin}>
        <ThemedText variant="title" style={{ marginBottom: theme.spacing.md }}>
          Quick Stats
        </ThemedText>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <ThemedText variant="stat">--</ThemedText>
            <ThemedText variant="label" style={{ marginTop: theme.spacing.xs }}>
              Games
            </ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText variant="stat">--</ThemedText>
            <ThemedText variant="label" style={{ marginTop: theme.spacing.xs }}>
              Wins
            </ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText variant="stat">--%</ThemedText>
            <ThemedText variant="label" style={{ marginTop: theme.spacing.xs }}>
              Win Rate
            </ThemedText>
          </View>
        </View>
      </Card>

      <Card style={styles.cardNoTopMargin}>
        <ThemedText variant="title" style={{ marginBottom: theme.spacing.md }}>
          Recent Activity
        </ThemedText>
        <ThemedText variant="secondary" style={[styles.placeholder, { marginTop: theme.spacing.sm }]}>
          No games recorded yet.
        </ThemedText>
        <ThemedText variant="hint" style={[styles.placeholder, { marginTop: theme.spacing.xs }]}>
          Track your first game to see stats here!
        </ThemedText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {},
  cardNoTopMargin: {
    marginTop: 0,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  placeholder: {
    textAlign: 'center',
  },
});
