import styled, {css} from 'styled-components';


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
		}



		span{
			position: absolute;
			font-size: 50px;
			color: #fff;
			margin-left: 180px;
			margin-top: 220px;
			font-weight: 500;
		} 

		p{
			position: absolute;
		}

		p.marca{
			margin-left: 185px;
			margin-top: 190px;
			font-size: 25px;
			color: #fff;
		}

		p.ano{
			margin-left: 185px;
			margin-top: 280px;
			font-size: 25px;
			color: #fff;
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
			
			margin-top: 25px;
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
				
				padding: 1px 30px;
				cursor: default;
				margin-bottom: 50px;
			}
		}

		div.sorteios{
			
			display: flex;
			margin-bottom: 54px;


			div.model{
				
				margin-left: 50px;
				transition: all 0.2s;

				& + div.model{
					margin-left: 8px;
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