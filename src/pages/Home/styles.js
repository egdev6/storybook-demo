import styled from 'styled-components';

export const Container = styled.div`
  padding: 34px;
  width:100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Title = styled.div`
	width:600px;
	height:auto;
	display:flex;
	flex-direction:column;
	jusify-content:center;
	align-items:center;

	img{
		width:50%;
		height:auto;
	}

	h1{
		text-align:center;
	}
`

export const H1 = styled.h1`
	font-family: 'Roboto';
`