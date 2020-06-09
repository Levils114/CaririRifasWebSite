import styled from 'styled-components'; // importando 'styled'  da biblioteca 'styled-components'

export const Container = styled.div`  ${/* criando uma variável 'Container' que recebe o styled, para dizer que essa variável será uma 'div' */}
	position: relative;
	text-align: center;

	span{
		width: 160px;
		background: #262626;
		padding: 8px;
		border-radius: 4px;
		font-size: 14px;
		font-weigth: 500;
		opacity: 0;
		transition: opacity 0.4s;
		visibility: hidden;
		position: absolute;
		bottom: calc(100% + 12px);
		left: 50%;
		transform: translateX(-50%);
		color: #d1d1d1;

		&::before{
			content: '';
			border-style: solid;
			border-color: #262626 transparent;
			border-width: 6px 6px 0 6px;
			top: 100%;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	&:hover span{
		opacity: 1;
		visibility: visible;
	}

	svg{
		margin-top: 6px;
		
		color: #C53030;
	}
`;