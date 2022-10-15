import themes from 'theme';

export type ThemeKeys = keyof typeof themes;

export type ThemeColorsType = keyof typeof themes.main.colors;
