import styled, {css} from 'styled-components';

import backgroundImg from './../../Assets/Background/background2.png';

interface ButtonProps{
	typeOfButton?: string;
}

export const Container = styled.div`

	

	div.footer{
		display: flex;
		align-items: flex-end;
		width: 100%;
	}
	
	div.img-background{
		img{
			width: 100%;
			height: 530px;
			transition: all 0.2s;

			@media(max-width: 600px){
				
				height: 220px;
				margin-bottom: 16px;

			}	
		}



		span{
			position: absolute;
			font-size: 50px;
			color: #fff;
			margin-left: 180px;
			margin-top: 220px;
			font-weight: 500;

			@media(max-width: 600px){
				font-size: 20px;
				margin-left: 30px;
				margin-top: 90px;
			}
		} 

		p{
			position: absolute;
		}

		p.marca{
			margin-left: 185px;
			margin-top: 190px;
			font-size: 25px;
			color: #fff;

			@media(max-width: 600px){
				font-size: 12.5px;
				margin-left: 30px;
				margin-top: 70px;
			}
		}

		p.ano{
			margin-left: 185px;
			margin-top: 280px;
			font-size: 25px;
			color: #fff;

			@media(max-width: 600px){
				font-size: 12.5px;
				margin-left: 30px;
				margin-top: 120px;
			}
		}

		
		button{
			position: absolute;
			background: transparent;
			margin-left: 185px;
			margin-top: 350px;
			padding: 20px 20px;
			border-radius: 5px;
			border: 2px solid #fff;
			transition: all 0.2s;

			&:hover{
				transform: scale(1.05);
			}

			a{		
				padding: 10px;
				color: #fff;
				text-decoration: none;
				font-weight: 500;

				
			}

			@media(max-width: 600px){
				margin-left: 30px;
				margin-top: 150px;
				padding: 10px 0px;
			}
		}

		p.description{
			margin-left: 185px;
			margin-top: 480px;
		}
	}




	div.slide-container {
	  width: 100%;
	  height: 100%;
	  margin: auto;
	}

	div.sorteiosContainer{

		p.main{
			font-weight: 500;
			font-size: 30px;
			
			
			margin-bottom: 10px;
			color: #fff;
			text-align: center;

			@media(max-width: 600px){
				font-size: 25px;

			}
		}

		div.divisor{
			
			width: 100%;
			display: flex;
			justify-content: center;
			
			button{
				border: 0px;
				
				padding: 1px 30px;
				cursor: default;
				margin-bottom: 50px;
			}
		}

		div.sorteios{
			
			display: flex;
			
			@media(max-width: 600px){
				flex-direction: column;
			}
			

			div.model{
				
				margin-left: 45px;
				margin-bottom: 54px;
				transition: all 0.2s;

				@media(max-width: 600px){
					margin-left: 45px;
				}

				& + div.model{
					margin-left: 8px;

					@media(max-width: 600px){
						margin-left: 45px;
					}
				}

				&:hover{
					transform: translateY(-5px);
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

				img{
					height: 190px;
					width: 284px;
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
	}

	div.etapas{
			width: 100%;
					
			background: #121212;

			div.title{
				height: 70px;
				
				display: flex;
				align-items: center;
				justify-content: center;


				p.main{
						margin-top: 25px;
						font-weight: 500;
						font-size: 30px;
						
						color: #fff;
						text-align: center;

						@media(max-width: 600px){
							font-size: 25px;
						}
				}		
			}		

			div.divisor{
						
				width: 100%;
				display: flex;
				justify-content: center;
						
				button{
					border: 0px;
					padding: 1px 80px;
					cursor: default;
					margin-top: 10px;
					margin-bottom: 30px;
				}
			}
				
			
			div.explainBox{
				display: flex;
				justify-content: center;

				@media(max-width: 600px){
					flex-direction: column;
				}

				div.explain{

					@media(max-width: 600px){
						margin-left: 88px;
					}

					& + div.explain{

						margin-left: 50px;

						@media(max-width: 600px){
							margin-left: 88px;
						}
					}


					div.explainTitle{
						display: flex;
						align-items: center;

					}
				}

				div.explainDescription{
					margin-top: 16px;
					margin-bottom: 45px;
					width: 220px;
					

					a{
						color: #d1d1d1;
						font-weight: 500;
					}

				}
			}
		}	
	}

	div.filantropiaContainer{
		width: 100%;
		height: 350px;
		
		
		p.main{
			font-weight: 500;
			font-size: 30px;
			
			
			margin-bottom: 10px;
			color: #fff;
			text-align: center;
		}

		div.divisor{
			
			width: 100%;
			display: flex;
			justify-content: center;
			
			button{
				border: 0px;
				
				padding: 1px 60px;
				cursor: default;
				margin-bottom: 50px;
			}
		}
	}
`

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