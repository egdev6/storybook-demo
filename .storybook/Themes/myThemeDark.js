import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/logo.png';
import { theme } from '../../src/styles/theme';
import '../../src/assets/css/fonts.css';

export default create({
  base: 'dark',

  colorPrimary: theme.primaryColor,
  colorSecondary: theme.secondaryColor,

  // UI
  appBg: theme.backgroundDark,
  appContentBg: theme.backgroundLight,
  appBorderColor: theme.backgroundDark,
  appBorderRadius: 4,

  // Text colors
  textColor: theme.white,
  textInverseColor: theme.white,

  // Toolbar default and active colors
  barTextColor: theme.secondaryColor,
  barSelectedColor: theme.primaryColor,
  barBg: theme.backgroundDarkAlter,

  // Form colors
  inputBg: theme.backgroundLight,
  inputBorder: 'transparent',
  inputTextColor: theme.backgroundDark,
  inputBorderRadius: 4,

  brandTitle: 'Egdev',
  brandUrl: 'https://github.com/egdev6/',
  brandImage: logo,
});