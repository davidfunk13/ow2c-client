import { Text, type TextStyle, type StyleProp } from 'react-native';
import type { ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import type { Theme } from '@/constants/theme';

type TextVariant = 'title' | 'heading' | 'stat' | 'body' | 'secondary' | 'label' | 'hint';

function getVariantStyle(variant: TextVariant, theme: Theme): TextStyle {
  switch (variant) {
    case 'title':
      return {
        fontSize: theme.font.lg,
        fontWeight: '600',
        color: theme.colors.text.primary,
      };
    case 'heading':
      return {
        fontSize: theme.font.xl,
        fontWeight: 'bold',
        color: theme.colors.text.primary,
      };
    case 'stat':
      return {
        fontSize: theme.font.xxl,
        fontWeight: 'bold',
        color: theme.colors.primary.main,
      };
    case 'body':
      return {
        fontSize: theme.font.md,
        color: theme.colors.text.primary,
      };
    case 'secondary':
      return {
        fontSize: theme.font.md,
        color: theme.colors.text.secondary,
      };
    case 'label':
      return {
        fontSize: theme.font.sm,
        color: theme.colors.text.secondary,
      };
    case 'hint':
      return {
        fontSize: theme.font.xs,
        color: theme.colors.text.disabled,
      };
  }
}

interface ThemedTextProps {
  variant?: TextVariant;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export function ThemedText({ variant = 'body', children, style }: ThemedTextProps) {
  const { theme } = useTheme();
  return <Text style={[getVariantStyle(variant, theme), style]}>{children}</Text>;
}
