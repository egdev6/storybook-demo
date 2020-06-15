import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const AvatarContainer = styled.div`
	width:150px;
	height:150px;
	border-radius: 50%;
	background-color: ${({bg}) => bg};
	display:flex;
	justify-content:center;
	align-items:center;

	.default{
		background-color: ${theme.backgroundDark};
		color: ${theme.white};
	}

	.light{
		background-color: ${theme.backgroundLight};
		color: ${theme.backgroundDark};
	}
	
	> div{
		border-radius: 50%;
		width:80%;
		height:80%;
		display:flex;
		justify-content:center;
		align-items:center;
		text-align:center;
		overflow:hidden;

		img{
			width:90%;
			height:auto;
		}

	}

`