import styled from 'styled-components';

import backgroundImg from './../../Assets/Background/background2.png';

export const Container = styled.div`

	

	div.title{
		display: flex;
		width: auto;
		background: #121212;
		color: #d1d1d1;
		height: 130px;
		align-items: center;

		h2{
			margin-left: 9%;

			@media(max-width: 600px){
				margin-left: 6%;
			}
		}
	}

	div.contasBancarias{

		height: 500px;

		@media(max-width: 600px){
			height: auto;
		}

		div.enunciado{
			display: flex;
			text-align: center;
			justify-content: center;
			margin-top: 40px;
			margin-bottom: 30px;
			
			a{
				color: #d1d1d1;
				font-weight: 500;
			}
		}
		

		div.divisor{
			display: flex;
			align-items: center;
			justify-content: center;

			button{
				padding: 1px 480px;
				border: 0px;
				cursor: default;

				@media(max-width: 600px){
					padding: 1px 100px;
				}
			}
		}

		div.dadosContainer{
			display: flex;
			
			justify-content: space-between;
			margin-top: 45px;
			max-width: 70.9%;
			margin-left: 200px;

			@media(max-width: 600px){
				margin-left: 100px;
				flex-direction: column;

			}
			

			div.dados{
				max-width: 160px;
				text-align: center;
				font-weight: 500;

				@media(max-width: 600px){
					margin-bottom: 24px;
				}
			}
		}
	}

`;