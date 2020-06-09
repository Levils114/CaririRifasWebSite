import styled, {css} from 'styled-components'; // importando 'styled' e a funcionalidade 'css' da biblioteca 'styled-components'

import backgroundImg from './../../Assets/Background/background2.png'; // importando 'backgroundImg' para ser a imagem de fundo

interface ButtonProps{ // criando uma interface chamada 'ButtonProps' que recebe os parâmetros abaixo
	typeOfButton?: string; // diz que typeOfButton não é obrigatório e que é uma string
}

export const Container = styled.div` /* cria uma variável chamada 'Container' e implementa dentro dela o styled, para passar a ser uma div */

	

	div.footer{
		display: flex;
		align-items: flex-end;
		width: 100%;
	}

	
	div.img-background{
		img{
			width: 100%;
			height: 60%;
			transition: all 0.2s;


			@media(max-width: 600px){
				width: 100%;
				height: 200px;
				margin-bottom: 16px;

			}	
		}



		span{
			position: absolute;
			font-size: 60px;
			color: #fff;
			margin-left: 180px;
			margin-top: 2.6%;
			font-weight: 500;

			@media(max-width: 600px){
				font-size: 20px;
				margin-left: 30px;
				margin-top: 62px;
			}
		} 

		p{
			position: absolute;
		}

		p.marca{
			margin-left: 185px;
			margin-top: 2.2%;
			font-size: 30px;
			color: #fff;

			@media(max-width: 600px){
				font-size: 12.5px;
				margin-left: 30px;
				margin-top: 47px;
			}
		}

		p.ano{
			margin-left: 185px;
			margin-top: 3.6%;
			font-size: 30px;
			color: #fff;

			@media(max-width: 600px){
				font-size: 12.5px;
				margin-left: 30px;
				margin-top: 87px;
			}
		}

		
		button{
			position: absolute;
			background: transparent;
			margin-left: 185px;
			margin-top: 4.5%;
			padding: 30px 40px;
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
				font-size: 25px;

				@media(max-width: 600px){
					font-size: 16px;
				}

				
			}

			@media(max-width: 600px){
				margin-left: 30px;
				margin-top: 108px;
				padding: 10px 0px;
			}
		}

		p.description{
			margin-left: 185px;
			margin-top: 6.3%;
			font-size: 19px;

			@media(max-width: 600px){
				margin-top: 155px;
				margin-left: 30px;
				width: 180px;
				font-size: 10.5px;
			}
		}
	}




	div.slide-container {
	 
	  
	 
	}

	div.sorteiosContainer{

		background: #121212;

		div.title{
			height: 70px;
			display: flex;
			align-items: center;
			background: #CCAD1E;

			p.main{
				font-weight: 500;
				font-size: 30px;
				margin-top: 7px;
				
				
				margin-bottom: 10px;
				color: #fff;
				margin-left: 45px;

				@media(max-width: 600px){
					font-size: 25px;
					text-align: center;

				}
			}
		}	

		div.divisor{
			
			width: 100%;
			display: flex;
			justify-content: center;
			visibility: hidden;
			
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
				align-items: center;
			}
			

			div.model{
				
				margin-left: 45px;
				margin-bottom: 54px;
				transition: all 0.2s;

				@media(max-width: 600px){
					margin-left: 0px;
				}

				& + div.model{
					margin-left: 8px;

					@media(max-width: 600px){
						margin-left: 0px;
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

	

	div.filantropiaContainer{
		width: 100%;
		
		
		div.title{
				height: 70px;
				
				display: flex;
				align-items: center;
				background: #CCAD1E;
				


				p.main{
						margin-top: 7px;
						font-weight: 500;
						font-size: 30px;
						margin-left: 45px;
						color: #fff;
						

						@media(max-width: 600px){
							font-size: 25px;
							text-align: center;
						}
				}		
			}		

		div.divisor{
			
			width: 100%;
			display: flex;
			justify-content: center;
			visibility: hidden;
			
			button{
				border: 0px;
				
				padding: 1px 60px;
				cursor: default;
				margin-bottom: 25px;
			}
		}

		div.filantropia{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 310px;

			@media(max-width: 600px){
				flex-direction: column;
				height: auto;
			}

			img{
				width: 350px;
				height: 250px;

				@media(max-width: 600px){
					height: 190px;
					width: 284px;
				}

			}

			p{
				font-size: 22px;
				margin-left: 24px;

				@media(max-width: 600px){
					width: 290px;
					margin-top: 16px;
					
				}
			}
		}
	}
`

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