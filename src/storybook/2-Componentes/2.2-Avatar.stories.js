import React from 'react';
import { withKnobs, text, number, select, color, files } from "@storybook/addon-knobs";
import { Avatar } from '../../components/'
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Componentes|Avatar',
  component: Avatar,
  decorators: [withKnobs, withA11y],
  parameters: {
  	componentSubtitle: 'Sub-label de componente',
    backgrounds: [
		{ name: 'dark', value: '#24292E', default: true },
		{ name: 'light', value: '#FDFEFE' },
    ],
  },
};
/**
 * Use `editView` to highlight key info with a predefined status.
 */
export const editView = () => {
	const name = text("Nombre", "Quique");
	const age = number("Edad", 38);
	const content = `Me llamo ${name} y tengo ${age} años.`;
	const themes = select('Temas', ['default', 'light'], 'default')
	const background = color('Color', '#D72323')
	const image = files('Imagen', '.png, .jpg, .jpeg', null)

	return (
		<Avatar className={themes} bg={background}>
			{!image ? content : <img src={image} alt=""/>}
		</Avatar>
	)
}

export const defaultView = () => {
	return (
		<Avatar className={'default'} />
	)
}

export const lightView = () => {
	return (
		<Avatar className={'light'} />
	)
}
