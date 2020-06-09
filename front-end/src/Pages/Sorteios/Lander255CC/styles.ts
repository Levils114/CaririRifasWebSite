import styled, {css} from 'styled-components'; // importando 'styled'  da biblioteca 'styled-components'

import backgroundImg from './../../../Assets/Background/background2.png'; // importando 'backgroundImg' para ser a imagem de fundo


export const Container = styled.div` ${/* cria uma variável chamada 'Container' e implementa dentro dela o styled, para passar a ser uma div */}



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

		div.centena{
			width: 200px;
			height: 30px;
			border-radius: 20px;
			background: red;
			text-align: center;
			margin-top: 8px;
			display: flex;
			justify-content: center;
			align-items: center;

			p{
				font-weight: 500;
				color: #FFF;
			}
		}

		div.ganhador{
			width: 200px;
			height: 30px;
			border-radius: 20px;
			background: green;
			text-align: center;
			margin-top: 4px;
			margin-bottom: 14px;
			display: flex;
			justify-content: center;
			align-items: center;

			p{
				font-weight: 500;
				color: #FFF;
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
		margin-bottom: 80px;

		span{
			font-weight: 500;
			border-radius: 20px;
			background: #FF2929;
			width: 600px; 
			color: #FFF;

			@media(max-width: 600px){
				font-size: 12px;
				width: 100%;
			}
		}
	}


`;
