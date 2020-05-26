import styled from 'styled-components';

import Tooltip from './../Tooltip/';

interface ButtonProps{
	state?: string;
}

export const Container = styled.button<ButtonProps>`

	border: 0px;
	background: transparent;
	padding: 5.5px 1px;
			

	a{
		padding: 5px 10px;
				
		text-decoration: none;
		color: #fff;
		font-weight: 500;
		border-radius: 20px;
		background: #CCAD1E;
	}
`;

export const Pele = styled(Tooltip)`

	
	height: 20px;
	margin-left: 16px;
	svg{
		margin: 0;
		color:#C53030;
	}
	span{
		background: #C53030;
		color: #F4EDE8;
		&::before{
			border-color: #C53030 transparent;
		}
	}
`;
