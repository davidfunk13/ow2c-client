// Color palette - single source of truth for all color values

interface ColorPalette {
  background: { default: string; paper: string };
  text: { primary: string; secondary: string; disabled: string };
  primary: { main: string };
  error: { main: string };
}

export const dark: ColorPalette = {
  background: { default: '#1a1a2e', paper: '#2a2a4e' },
  text: { primary: '#fff', secondary: '#888', disabled: '#666' },
  primary: { main: '#00aeff' },
  error: { main: '#dc3545' },
};

export const light: ColorPalette = {
  background: { default: '#ffffff', paper: '#f5f5f5' },
  text: { primary: '#1a1a2e', secondary: '#666', disabled: '#888' },
  primary: { main: '#00aeff' },
  error: { main: '#dc3545' },
};

export type { ColorPalette };

export default { light, dark };
