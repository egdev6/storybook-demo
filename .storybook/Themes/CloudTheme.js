import { create } from '@storybook/theming/create';
import logo from '../../src/assets/images/cloud-logo.png';
import { theme } from '../../src/styles/theme';
import '../../src/assets/css/fonts.css';

export default create({
  base: 'dark',

  colorPrimary: '#01E7EC',
  colorSecondary: '#FFFFFF',

  // UI
  appBg: '#24292E',
  appContentBg: '#FFFFFF',
  appBorderColor: '#24292E',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto"',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#24292E',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#01E7EC',
  barBg: '#24292E',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'transparent',
  inputTextColor: '#24292E',
  inputBorderRadius: 6,

  brandTitle: 'Cloud District',
  brandUrl: 'https://clouddistrict.com/',
  brandImage: logo,
});