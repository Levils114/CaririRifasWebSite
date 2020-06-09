import styled from 'styled-components'; // importando 'styled'  da biblioteca 'styled-components'

import backgroundImg from './../../../../Assets/Background/background2.png'; // importando 'backgroundImg' para ser a imagem de fundo


export const Container = styled.div` /* cria uma variável chamada 'Container' e implementa dentro dela o styled, para passar a ser uma div */
	
	

	div.formContainer{
		display: flex;
		width: auto;
		justify-content: center;
		height: 700px;

		div.form{
			width: 900px;
			background: rgba(18, 18, 18, 1);
			border-radius: 20px;

			@media(max-width: 600px){
				width: 100%;
				background: rgba(18,18,18,0.5);
			}

			div.voltar{
				margin-left: 24px;
				margin-top: 17px;
				a{
					display: flex;
					align-items: center;
					text-decoration: none;
					color: #d1d1d1;

					p{
						margin-left: 3px;
						font-size: 17px;
					}
				}
			}

			h1{
				text-align: center;
				margin-top: 50px;
			}

			form{
				margin-left: 34%;
				margin-top: 30px;

				@media(max-width: 600px){
					margin-left: 10%;
				}

				p{
					font-size: 18px;
					margin-bottom: 8px;
					margin-top: 8px;
				}

				

				div.buttons{

					display: flex;
					
					button{
						width: 20%;
						height: 50px;
						border: 0px;
						border-radius: 5px;
						margin-top: 20px;
						margin-left: 20px;
						font-size: 17px;
						color: #fff;
						text-align: center;

						@media(max-width: 600px){
							width: 40%;
							margin-left: 8px;
						}

						& + button{
							margin-left: 16px;
						}
					}

					button.enviar{
						background: green;
					}

					button.resetar{
						background: red;
					}
				}	
			}	
		}
	}
`;