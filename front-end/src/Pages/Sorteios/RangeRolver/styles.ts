import styled, {css} from 'styled-components';

import backgroundImg from './../../../Assets/Background/background2.png';

interface ButtonProps{
	estado?: string;
}

export const Container = styled.div`

	background: #262626 url(${backgroundImg}) 100% 8% no-repeat;

	

	div.datas{
		
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;

		div.slider{
			width: 547px;
			margin-right: 70px;

			img{
				height: 365px;
				width: 547px;
			}
		}

		div.divisor{
			button{
				cursor: default;
				border: 0px;
				padding: 1px 230px;
				margin-bottom: 13px;
			}
		}
	}

	div.divisor2{
		display: flex;
		justify-content: center;
		align-items: center;
		
		button{
			cursor: default;
			border: 0px;
			padding: 0.5px 460px;
			margin-bottom: 22px;
			margin-top: 22px;
			opacity: 0.5;
		}
	}

	div.alert{
		display: flex;
		justify-content: center;
		text-align: center;
		

		span{
			font-weight: 500;
			border-radius: 20px;
			background: #FF2929;
			width: 600px; 
			color: #FFF
		}
	}

	div.stylesOfButtons{

		margin-left: 130px;
		margin-bottom: 30px;
		margin-top: 22px;

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
			background: #444444;
		}

		button.pago{
			background: green;
		}
	}

	div.rifas{
		margin-left: 130px;
		margin-right: 130px;
		margin-bottom: 30px;

		div.divToTooltip{

			position: relative;
			display: inline-block;
				
			button{
				
			}

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

	}

`;

export const Button = styled.button<ButtonProps>`

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

	${props => props.estado === "reservado" && css`
		a{background: #444444;}
	`}

	${props => props.estado === "pago" && css`
		a{background: green;}
	`}


`