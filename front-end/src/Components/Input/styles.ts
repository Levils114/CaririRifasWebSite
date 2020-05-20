import styled, {css} from 'styled-components';

import Tooltip from './../Tooltip/';

interface InputProps{
	isErrored: boolean;
}

export const Container = styled.div<InputProps>`
	background: #d1d1d1;
	color: #666360;
	display: flex;
	align-items: center;
	border-radius: 10px;
	border: 2px solid #d1d1d1;
	padding: 16px;
	width: 50%;

	input{
		flex: 1;
		background: transparent;
		border: 0;
		color: #262626;
		font-size: 16px;

		&::placeholder{
			color: #666360;
		}
	}

	> svg{
		margin-right: 10px;

	}

	${props => props.isErrored && css`
			border: 3px solid #C53030;
		`}
`;

export const Error = styled(Tooltip)`

	height: 20px;
	margin-left: 16px;

	svg{
		margin: 0;
		color:#C53030;
	}

	span{
		background: #262626;
		color: #F4EDE8;
		&::before{
			border-color: #262626 transparent;
		}
	}
`;