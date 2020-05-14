import styled from 'styled-components';

export const Container = styled.div`
	div.contatos{
		width: auto;
		height: 490px;

		div.enunciado{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 70px;
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

				a{
					padding: 10px 20px;
					text-decoration: none;
					transition: all 0.2s;
					display: flex;
					align-items: center;

					font-size: 17px;
					font-weight: 500;
					
					& + a{
						margin-left: 8px;
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

		div.etapas{
			display: flex;
			justify-content: center;
			width: auto;
			height: 300px;

			
			background: #121212;
			

			div.explain{

				margin-top: 24px;


				& + div.explain{
					margin-left: 54px;
				}

				div.explainTitle{

					display: flex;
					align-items: center;
				
					
				}
			}

			div.explainDescription{
				margin-top: 16px;
				width: 210px;
				

				a{
					color: #d1d1d1;
					font-weight: 500;
				}

			}
		}
	}
`;
