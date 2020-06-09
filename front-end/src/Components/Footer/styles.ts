import styled from 'styled-components'; // importando as funcionalidades da biblioteca 'styled-compenents' como 'styled' 

import marcaDagua from './../../Assets/Menu/marcadagua.png'; // importando a marca d'gua para utilzar como background em dispositivos desktop
import marcaDagua2 from './../../Assets/Menu/marcadagua2.png'; // importando a marca d'agua 2 para utilizar como backgrund em dispositivos mobile


export const FooterPrimary = styled.div` /* criando uma variável chamada 'FooterPrimary' e a implementando dentro dela uma div, ou seja, onde tem 'FooterPrimary', na vdd é uma div */
	
	width: 100%;

	div.etapas{
		background: #0d0d0d;
		height: 350px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		@media(max-width: 600px){
			height: auto;
			margin-top: 16px;
		}

		div.explainBox{
			display: flex;
			justify-content: center;
			margin-bottom: 16px;

			@media(max-width: 600px){
				flex-direction: column;
			}
			

			div.explain{

				& + div.explain{
					margin-left: 44px;

					@media(max-width: 600px){
						margin-left: 0px;
						margin-top: 16px;
					}
				}

				div.explainTitle{
					display: flex;
					align-items: center;
					margin-bottom: 12px;
				}

				div.explainDescription{
					width: 220px;

					a{
						color: #d1d1d1;
					}
				}
			}
		}
	}

	div.formasDePagamento{
		div.formasDePagamentoTitle{
			display: flex;
			justify-content: center;
		}

		div.opcoes{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80px;

			img{
				height: 60px;
				width: 100px;

				@media(max-width: 600px){
					width: 80px;
					height: 60px;
				}

				& + img{
					margin-left: 4px;
				}
			}
		}
	}

	div.realFooter{
		display: flex;
		justify-content: space-between;
		align-items: center;

		div.comments{
			p{
				font-size: 18px;

				@media(max-width: 600px){
					font-size: 12px;
				}

				& + p{
					margin-top: 16px;

					@media(max-width: 600px){
						margin-top: 5px;
					}
				}
			}
		}

		div.links{
			display: flex;

			div.box{

				& + div.box{
					margin-left: 10px;

					@media(max-width: 600px){
						margin-left: 4px;
					}
				}

				svg{
					color: #d1d1d1;
				}

				a{
					text-decoration: none;
					color: #d1d1d1;
					display: flex;
					align-items: center;
					
				}
			}
		}
	}
 
`