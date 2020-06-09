import styled, { css } from 'styled-components'; // importando 'styled'  da biblioteca 'styled-components'

import backgroundImg from './../../../Assets/Background/background2.png'; // importando 'backgroundImg' para ser a imagem de fundo

interface ButtonProps{ // criando uma interface chamada 'ButtonProps' que recebe os parâmetros abaixo
	typeOfButton?: string; // diz que typeOfButton não é obrigatório e que é uma string
}


export const Container = styled.div` /* cria uma variável chamada 'Container' e implementa dentro dela o styled, para passar a ser uma div */
	
`;

export const Filtros = styled.div` /* cria uma variável chamada 'Filtros' e implementa dentro dela o styled, para passar a ser uma div */

	
	height: 540px;

	@media(max-width: 600px){
		height: auto;
	}

	div.filtros{
		margin-left: 79px;
		margin-top: 44px;
		display: flex;

		@media(max-width: 600px){
			margin-left: 10px;
		}

		button{
			background: #121212;
			color: #d1d1d1;
			padding: 5px 10px;
			border: 1px solid #d1d1d1;
			transition: all 0.2s;
			font-weight: 400;
			display: flex;
			align-items: center;
			flex-direction: row;
			border-radius: 5px;

			p{
				font-size: 18px;

				@media(max-width: 600px){
					font-size: 13px;
				}
			}
			

			svg{
				color: #CCAD1E;
			}

			&:hover{
				transform: scale(1.05);
				background: #121212;
			}

			& + button{
				margin-left: 4px;

				@media(max-width: 600px){
					margin-left: 0px;
				}
			}

			
		}

		

	}
`;

export const SorteiosPage = styled.div` /* cria uma variável chamada 'SorteiosPage' e implementa dentro dela o styled, para passar a ser uma div */

	margin-bottom: 37px;
	margin-top: 63px;

	@media(max-width: 600px){
		margin-top: 40px;
	}

	div.sorteios{

		display: flex;

		@media(max-width: 600px){
			flex-direction: column;
			align-items: center;
		}


		& + div.sorteios{
				margin-top: 28px;
			}


		div.model{

			margin-left: 79px;
			transition: all 0.2s;

			@media(max-width: 600px){
				margin-left: 0px;
				margin-bottom: 40px;
			}

			&:hover{
				transform: translateY(-7px);
			}

			& + div.model{
				margin-left: 16px;

				@media(max-width: 600px){
					margin-bottom: 40px; 
					margin-left: 0px;
				}
			}

			img{
				height: 190px;
				width: 284px;
			}

			p.emBreve{
				position: absolute;
				padding: 10px 20px;
				background: orange;
				font-weight: 500;
				color: #fff;
				margin-left: 8px;
				margin-top: 4px;
			}

			p.comprar{
				position: absolute;
				padding: 10px 20px;
				background: #59BA41;
				font-weight: 500;
				color: #fff;
				margin-left: 8px;
				margin-top: 4px;
			}

			p.esgotado{
				position: absolute;
				padding: 10px 20px;
				background: red;
				font-weight: 500;
				color: #fff;
				margin-left: 8px;
				margin-top: 4px;
			}

			p.modelo{
				font-size: 18px;
				font-weight: 500;
				color: #fff;
				margin-top: 8px;
			}

			p.data{
				margin-bottom: 8px;
			}
		}
	}
`;

export const Button = styled.button<ButtonProps>` /* criando uma variável chamada 'Button', e implementando dentro dela 'styled' para passar a ser um button do html e também implementando a interface 'ButtonProps' dentro da variável 'Button' */
	${props => props.typeOfButton === "comprar" && css` /* criando uma condição para caso o 'typeOfButton' seja igual a 'comprar', no caso, o código irá gerar o que está no escopo abaixo */
		background: #59BA41;
		border-radius: 16px;
		padding: 5px 10px;
		border: 0px;

		a{
			text-decoration: none;
			color: #fff;
			font-weight: 500;

		}
	`}

	${props => props.typeOfButton === "terminado" && css` /* criando uma condição para caso o 'typeOfButton' seja igual a 'terminado', no caso, o código irá gerar o que está no escopo abaixo */
		background: red;
		border-radius: 16px;
		padding: 5px 10px;
		border: 0px;

		a{
			text-decoration: none;
			color: #fff;
			font-weight: 500;

		}
	`}

	${props => props.typeOfButton === "emBreve" && css` /* criando uma condição para caso o 'typeOfButton' seja igual a 'emBreve', no caso, o código irá gerar o que está no escopo abaixo */
		background: orange;
		border-radius: 16px;
		padding: 5px 10px;
		border: 0px;

		a{
			text-decoration: none;
			color: #fff;
			font-weight: 500;

		}
	`}

`