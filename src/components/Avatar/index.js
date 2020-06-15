import React from 'react'
import * as S from './styles'
import { PropTypes } from 'prop-types';

/**
 * Use `Avatar` to highlight key info with a predefined status.
 */
export default function Avatar({className, bg, children}){
	return(
		<S.AvatarContainer bg={bg}>
			<div className={className}>
				{children}
			</div>
		</S.AvatarContainer>
	)
}

Avatar.defaultProps={
	className: 'default',
	bg: '#D72323',
	children: 'Hola mundo!'
}

Avatar.propTypes ={
	className: PropTypes.oneOf(['default', 'light']),
	bg: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}