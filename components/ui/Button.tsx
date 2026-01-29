import { Pressable, Text, StyleSheet, type ViewStyle, type StyleProp } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

type ButtonVariant = 'primary' | 'danger';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function Button({ title, onPress, variant = 'primary', disabled = false, style }: ButtonProps) {
  const { theme } = useTheme();

  const variantStyle =
    variant === 'primary'
      ? {
          backgroundColor: theme.colors.primary.main,
          paddingHorizontal: theme.spacing.xl,
          paddingVertical: theme.spacing.md,
          minWidth: 200,
        }
      : {
          backgroundColor: theme.colors.error.main,
          padding: theme.spacing.md,
          margin: theme.spacing.md,
        };

  return (
    <Pressable
      style={[
        styles.base,
        { borderRadius: theme.radius.sm },
        variantStyle,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: theme.colors.text.primary, fontSize: theme.font.md }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.7,
  },
  text: {
    fontWeight: '600',
  },
});
