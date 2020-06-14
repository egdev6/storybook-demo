import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/logo.png';
import { theme } from '../../src/styles/theme';
import '../../src/assets/css/fonts.css';

export default create({
  base: 'light',

  colorPrimary: theme.primaryColor,
  colorSecondary: theme.secondaryColor,

  // UI
  appBg: theme.backgroundLightAlter,
  appContentBg: theme.backgroundLightAlter,
  appBorderColor: theme.backgroundDark,
  appBorderRadius: 6,

  // Typography
  fontBase: '"Roboto"',
  fontCode: 'monospace',

  // Text colors
  textColor: theme.backgroundDark,
  textInverseColor: theme.backgroundDarkAlter,

  // Toolbar default and active colors
  barTextColor: theme.backgroundDark,
  barSelectedColor: theme.primaryColor,
  barBg: theme.white,

  // Form colors
  inputBg: theme.white,
  inputBorder: 'transparent',
  inputTextColor: theme.backgroundDark,
  inputBorderRadius: 6,

  brandTitle: 'Egdev',
  brandUrl: 'https://github.com/egdev6/',
  brandImage: logo,
});