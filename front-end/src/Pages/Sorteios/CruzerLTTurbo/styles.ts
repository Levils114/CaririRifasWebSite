import styled from 'styled-components';

export const Container = styled.div`

	max-widht: 700px;

	div.datas{
		widht: 700px;
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
		height: 70px;
		button{
			cursor: default;
			border: 0px;
			padding: 0.5px 460px;
			margin-bottom: 13px;
			opacity: 0.5;
		}
	}

	div.rifas{
		margin-left: 130px;
		margin-right: 130px;

		button{
			border: 0px;
			background: transparent;
			padding: 5px 1px;

			a{
				padding: 5px 10px;
				
				text-decoration: none;
				color: #d1d1d1;
				border-radius: 20px;
				background: #000
			}
		}
	}

`;