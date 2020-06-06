import styled from 'styled-components';

export const Container = styled.div`
	
	div.aboutUs{
		background: #121212;
		height: 450px;

		@media(max-width: 600px){
			height: auto;
		}

		div.title{
			height: 80px;
			display: flex;
			align-items: center;
			background: #CCAD1E;

			h1{
				margin-left: 45px;

				@media(max-width: 600px){
					text-align: center;
				}
			}
		}	

		div.aboutUsDescription{
			display: flex;
			
			width: 100%;



			@media(max-width: 600px){
				flex-direction: column;
				
				align-items: center;
			}

			div#firstModel{
				margin-left: 45px;

				@media(max-width: 600px){
					margin-left: 0px;
				}
			}

			div.divToOrganize{
				width: 300px;
				margin-top: 24px;
				margin-bottom: 24px;
				margin-right: 16px;

				& + div.divToOrganize{
					margin-left: 80px;

					@media(max-width: 600px){
						margin-left: 0px;
					}
				}

				@media(max-width: 600px){
					margin-bottom: 16px;
					margin-right: 0px;
					width: 250px;
				}

				p{
					font-size: 20px;
				}
			}
		}
	}

	div.company{

		height: 350px;

		@media(max-width: 600px){
			height: auto;
		}


		div.titleCompany{
			height: 80px;
			display: flex;
			align-items: center;
			background: #CCAD1E;


			h1{
				margin-left: 45px;

				@media(max-width: 600px){
					text-align: center;
				}
			}
		}	

		div.companyContainer{
			display: flex;
			

			@media(max-width: 600px){
				flex-direction: column;
				align-items: center;
			}

			div#firstModel{
				margin-left: 45px;

				@media(max-width: 600px){
					margin-left: 0px;
				}
			}

			div.model{

				margin-top: 34px;
				margin-bottom: 24px;
				

				& + div.model{
					margin-left: 80px;

					@media(max-width: 600px){
						margin-left: 0px;
					}
				}

				div.title{
					display: flex;
					align-items: center;

					svg{
						color: #CCAD1E;
					}

					span{
						font-weight: 500;
						font-size: 23px;
					}
				}

				div.description{
					width: 250px; 
					margin-top: 16px;

					p{
						font-size: 20px;
					}
				}
			}
		}
	}

`;