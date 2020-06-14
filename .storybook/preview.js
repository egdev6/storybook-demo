import { addParameters, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import myThemeDark from './Themes/myThemeDark';
import myThemeLight from './Themes/myThemeLight';
import '../src/assets/css/fonts.css';

//Configuración de addons y storybook
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  options: {
    theme: myThemeLight,
    panelPosition: 'bottom',
    isFullscreen: false,
	showNav: true,
	showPanel: true,
	sidebarAnimations: true,
	enableShortcuts: true,
	isToolshown: true,
	selectedPanel: undefined,
  },
});
