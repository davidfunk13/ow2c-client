import { dark, light, type ColorPalette } from './Colors';

// Theme type - combines colors with design tokens
interface Theme {
  colors: ColorPalette;
  spacing: { xs: number; sm: number; md: number; lg: number; xl: number };
  radius: { sm: number; md: number; full: number };
  font: { xs: number; sm: number; md: number; lg: number; xl: number; xxl: number };
}

// Shared tokens (same for light/dark)
const tokens = {
  spacing: { xs: 4, sm: 8, md: 16, lg: 20, xl: 32 },
  radius: { sm: 8, md: 12, full: 50 },
  font: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 28 },
} as const;

export const darkTheme: Theme = { colors: dark, ...tokens };
export const lightTheme: Theme = { colors: light, ...tokens };

// Export types for components
export type { Theme, ColorPalette };
export type Spacing = keyof Theme['spacing'];
export type FontSize = keyof Theme['font'];
