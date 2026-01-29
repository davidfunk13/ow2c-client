import { View, ScrollView, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import type { ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ScreenProps {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Screen({ children, scroll = false, style }: ScreenProps) {
  const { theme } = useTheme();

  const containerStyle = [
    styles.container,
    { backgroundColor: theme.colors.background.default },
    style,
  ];

  if (scroll) {
    return <ScrollView style={containerStyle}>{children}</ScrollView>;
  }
  return <View style={containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
