import styled, {css} from 'styled-components';

import backgroundImg from './../../../Assets/Background/background2.png';

interface ButtonProps{
	estado ?: string;
}

export const Container = styled.div`



	max-widht: 700px;

	div.datas{
		widht: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;

		@media(max-width: 600px){
			flex-direction: column;
			margin-top: 0px;
		}

		h3{
			@media(max-width: 600px){
				margin-top: 16px;
			}
		}

		div.slider{
			width: 547px;
			margin-right: 70px;

			@media(max-width: 600px){
				width: 100%;
				margin-right: 0px;
			}

			img{
				height: 365px;
				width: 547px;

				@media(max-width: 600px){
					height: 280px;
					width: 100%;
				}
			}
		}

		div.divisor{
			button{
				cursor: default;
				border: 0px;
				padding: 1px 230px;
				margin-bottom: 13px;

				@media(max-width: 600px){
					padding: 1px 115px;
				}
			}
		}
	}

	div.divisor2{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70px;
		button{
			cursor: default;
			border: 0px;
			padding: 0.5px 460px;
			margin-bottom: 13px;
			opacity: 0.5;

			@media(max-width: 600px){
				padding: 0.5px;
				width: 100%;
				margin-bottom: 4px;
			}
		}
	}

	div.alert{
		display: flex;
		justify-content: center;
		text-align: center;
		margin-top: 8px;

		span{
			font-weight: 500;
			border-radius: 20px;
			background: #FF2929;
			width: 84%; 
			color: #FFF;

			@media(max-width: 600px){
				font-size: 12px;
				width: 100%;
			}
		}
	}

	div.alert1{
		display: flex;
		justify-content: center;
		text-align: center;


		span{
			font-weight: 500;
			border-radius: 20px;
			background: #00a600;
			width: 84%; 
			color: #FFF;

			@media(max-width: 600px){
				font-size: 12px;
				width: 100%;
			}
		}
	}

	div.stylesOfButtons{

		margin-left: 130px;
		margin-bottom: 30px;
		margin-top: 22px;

		@media(max-width: 600px){
			margin-left: 30px;
		}

		button{
			padding: 5px 10px;
			cursor: default;
			color: #FFF;
			border: 0px;
			border-radius: 20px;
			font-weight: 500;
		}

		button.aberto{
			background: #CCAD1E;
		}

		button.reservado{
			background: #101010;
		}

		button.pago{
			background: green;
		}
	}

	div.rifas{
		margin-left: 130px;
		margin-right: 130px;
		margin-bottom: 30px;

		@media(max-width: 600px){
			margin-left: 30px;
			margin-right: 0px;
		}

		div.divToTooltip{

			position: relative;
			display: inline-block;

			span{
				visibility: hidden;
			  	width: 160px;
			  	background-color: #121212;
			  	color: #fff;
			  	text-align: center;
			  	border-radius: 6px;
			  	padding: 5px 0;
			  	bottom: 100%;
			  	left: 50%;
			  	margin-left: -85px;
			  	margin-bottom: 5px;

			  	position: absolute;
  				z-index: 1;

  				&::before{
  					content: '';
					border-style: solid;
					border-color: #121212 transparent;
  					border-width: 6px 6px 0 6px;
  					top: 100%;
					position: absolute;
					left: 50%;
  				}
			}

			&:hover{
				span{
					visibility: visible;
				}
			}
	}

`;

export const Button = styled.button<ButtonProps>`

	${props => props.estado === "" && css`
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
	`}	

	${props => props.estado === "reservado" && css`
		border: 0px;
		background: transparent;
		padding: 5.5px 1px;
		cursor: default;

		a{
			padding: 5px 10px;
			cursor: default;
					
			text-decoration: none;
			color: #fff;
			font-weight: 500;
			border-radius: 20px;
			background: #101010;
		}
	`}

	${props => props.estado === "pago" && css`
		border: 0px;
		background: transparent;
		padding: 5.5px 1px;
		cursor: default;

		a{
			padding: 5px 10px;
			cursor: default;
					
			text-decoration: none;
			color: #fff;
			font-weight: 500;
			border-radius: 20px;
			background: green;
		}
	`}


`