import React from 'react';
import * as S from './styles';
import logo from '~/assets/images/logo.png'

export default function Home() {
	return (
		<S.Container>
			<S.Title>
				<img src={logo} alt=""/>
				<S.H1>Bienvenidos a la demo de Storybook</S.H1>
		  	</S.Title>
		</S.Container>
	);
}
