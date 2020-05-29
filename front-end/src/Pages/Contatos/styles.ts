import styled from 'styled-components';

import backgroundImg from './../../Assets/Background/background2.png';

export const Container = styled.div`

	

	div.contatos{
		width: 100%;
		height: 400px;

		@media(max-width: 600px){
			height: 500px;
		}

		div.enunciado{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 120px;
		}

		div.description{
			text-align: center;
			margin-top: 30px;
		}

		div.links{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 34px;
			margin-bottom: 90px;


			div.buttons{
				display: flex;
				justify-content: column;

				@media(max-width: 600px){
					flex-direction: column;
					text-align: center;
				}


				a{
					padding: 10px 25px;
					text-decoration: none;
					transition: all 0.2s;
					display: flex;
					align-items: center;

					font-size: 17px;
					font-weight: 500;

					@media(max-width: 600px){
							margin-bottom: 16px;
						}
					
					& + a{
						margin-left: 8px;

						@media(max-width: 600px){
							margin-bottom: 16px;
						}
					}

					&:hover{
						transform: scale(1.1);
					}
				}

				a.whatsapp{
					border: 3px solid #075E54;
					color: #ECE5DD;
					background: #128C7E;
				}

				a.instagram{
					border: 3px solid #ff0f4d;
					color: #ECE5DD;
					background: #F73466;
				}

				a.email{
					border: 3px solid #B23121;
					color: #DADADA;
					background: #D44638;
				}

				a.phone{
					border: 3px solid #125688;
					color: #DADADA;
					background: #458EFF;
				}
			}	
		}

		
`;
