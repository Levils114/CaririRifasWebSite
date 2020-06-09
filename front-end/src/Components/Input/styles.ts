import styled, {css} from 'styled-components'; // importando 'styled' e a funcionalidade 'css' da biblioteca 'styled-components'

import Tooltip from './../Tooltip/'; // importando o componente 'Tooltip' de './src/components/Tooltip/index.tsx'

interface InputProps{ // criando uma interface chamada 'InputProps' que recebe o parâmetro abaixo
	isErrored: boolean; // diz que 'isErrored' é um booleano
}

export const Container = styled.div<InputProps>` /* criando uma variável 'Container' que recebe o styled, para dizer que essa variável será uma 'div' e também recebe a interface 'InputProps' */
	background: #d1d1d1;
	color: #666360;
	display: flex;
	align-items: center;
	border-radius: 10px;
	border: 2px solid #d1d1d1;
	padding: 16px;
	width: 50%;

	@media(max-width: 600px){
		width: 90%;
	}

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

		@media(max-width: 600px){
			visibility: hidden;
			margin-right: -20px;
		}

	}

	${props => props.isErrored && css` /* aqui diz que quando 'isErrored' for 'true', crie uma borda de 3px e com cor vermelha */
			border: 3px solid #C53030;
		`}
`;

export const Error = styled(Tooltip)` /* aqui é criada uma variável chamada 'Error', que recebe styled que vai dizer que na verdade, essa variável está estilizando o 'Tooltip' importado de './src/components/Tooltip/index.tsx'*/

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