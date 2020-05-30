import styled, { css } from 'styled-components';

import backgroundImg from './../../../Assets/Background/background2.png';

interface ButtonProps{
	typeOfButton?: string;
	itsOn?: boolean;
}


export const Container = styled.div`
	
	

	

`;

export const Filtros = styled.div`

	
	height: 540px;

	@media(max-width: 600px){
		height: auto;
	}

	div.filtros{
		margin-left: 79px;
		margin-top: 44px;

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

			&:hover{
				transform: scale(1.05);
				background: #121212;
			}

			
		}

		button.firstButton{
			border-radius: 5px 0 0 5px;
		}

		button.lastButton{
			border-radius: 0 5px 5px 0;
		}

	}
`;

export const SorteiosPage = styled.div`

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

export const Button = styled.button<ButtonProps>`
	${props => props.typeOfButton === "comprar" && css`
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

	${props => props.typeOfButton === "terminado" && css`
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

	${props => props.typeOfButton === "emBreve" && css`
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