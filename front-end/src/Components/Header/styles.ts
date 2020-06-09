import styled from 'styled-components'; // importando 'styled'  da biblioteca 'styled-components'

import waves from './../../Assets/Header/waves.png'; // importando a imagem 'waves' para uso de background

export const FirstHeader = styled.div` /* criando a variável FirstHeader e implementando dentro dela 'styled' e dizendo que ela é na verdade uma div */
	display: flex;
	background: #2e2e2e;
	height: 30px;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 600px){
		height: 70px;
	}

	p{
		margin-left: 20px;
		font-weight: 500;

		@media(max-width: 600px){
			margin-left: 5px;
			width: 250px;
		}
	}

	div{
		display: flex;
	}

	

	button{
		background: transparent;
		border: 0;

		& + button{
			margin-left: 8px;

			@media(max-width: 600px){
				margin-left: 3px;
			}
		} 

		a{
			text-decoration: none;
			color: #CCAD1E;
			display: flex;
			align-items: center;
			position: relative;

			p{
				color: #d1d1d1;
				margin-top: -5px;
				margin-right: 3px;
				visibility: hidden;
				position: absolute;
				background-color: black;
				z-index: 1;
				font-size: 16px;
				font-weight: 400;
			}
		}

		svg{
			transition: all 0.2s;
		}

		a:hover p{
			visibility: visible;
		}

		a:hover svg{
			transform: scale(1.3);
		}

	}

	button.lastButton{
		margin-right: 20px;

		@media(max-width: 600px){
			margin-right: 5px;
		}
	}
`;


export const HeaderPrimary = styled.div` /* criando a variável HeaderPrimary e implementando dentro dela 'styled' e dizendo que ela é na verdade uma div */
	background: #131313 url(${waves}) bottom no-repeat ;
	height: 112px;

	header {
	    width: 100%;
	    margin: 0 auto;
	    display: flex;
		align-items: center;
	    justify-content: space-between;



	    div{
	    	display: flex;
	    	align-items: center;

	    	margin-top: 7px;

	    	@media(max-width: 600px){
	    		margin-top: 8px;
	    	}

	    	button{
	    		background: transparent;
	    		border: 0px;

		    	svg{
					visibility: hidden;

					@media(max-width: 600px){
						color: #CCAD1E;
						visibility: visible;
						margin-left: 10px;
					}		
				}
			}	

		    img{
		    	height: 100px;
		    	width: 350px;
		    	margin-left: 100px;

		    	@media(max-width: 600px){
		    		margin-left: 2px;
		    		width: 300px;
		    	}
		    	
		    }
		}

	    nav {
	    	

	    	@media(max-width: 600px){
	    		visibility: hidden;
	    	}

		      a {
		        color: #fff;
		        text-decoration: none;
		        font-size: 16px;
		        font-weight: 500;
		        transition: all 0.2s;
		        margin-top: 15px;
		        display: flex;
		        align-items: center;
		        border: 2px solid #CCAD1E;
		        height: 42px;

		        & + a {
		          margin-left: 20px;
		        }
		        &:hover {
		          opacity: 0.6;
		          transform: scale(1.3);
		        }

		        svg{
						color: #CCAD1E;
						margin-right: 6px;
					}

		        p{
		        	display: flex;
		        	align-items: center;

			        svg{
						color: #CCAD1E;
						margin-right: 4px;
					}
				}	
		      }

	      a#lastLink{
	      	margin-right: 60px;
	      }

	      a.hvr-underline-from-center {
	        display: inline-block;
	        vertical-align: middle;
	        -webkit-transform: perspective(1px) translateZ(0);
	        transform: perspective(1px) translateZ(0);
	        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	        position: relative;
	        overflow: hidden;
	        padding: 8px;
	      }

	      a.hvr-underline-from-center:before {
	        content: "";
	        position: absolute;
	        z-index: -1;
	        left: 51%;
	        right: 51%;
	        bottom: 0;
	        background: #CCAD1E;
	        height: 4px;
	        -webkit-transition-property: left, right;
	        transition-property: left, right;
	        -webkit-transition-duration: 0.3s;
	        transition-duration: 0.3s;
	        -webkit-transition-timing-function: ease-out;
	        transition-timing-function: ease-out;
	      }
	      a.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
	        left: 0;
	        right: 0;
	      }
	    }
	  }

	
`;

export const NavBar = styled.div` /* criando a variável NavBar e implementando dentro dela 'styled' e dizendo que ela é na verdade uma div */

	background: #121212;
	display: flex;
	flex-direction: column;

	button{
		background: transparent;
		border: 0px;
		margin-left: 4px;
		margin-top: 10px;

		svg{
			color: #CCAD1E;
		}
	}

	nav {
	    	margin-top: 20px;
	    	margin-left: 10px;

	    	display: flex;
			flex-direction: column;

		      a {
		        color: #fff;
		        text-decoration: none;
		        font-size: 16px;
		        font-weight: 500;
		        transition: all 0.2s;
		        margin-top: 15px;
		        display: flex;
		        align-items: center;

		        border: 2px solid #dcaf27;
		        height: 42px;

		        @media(max-width: 600px){
		        	margin-left: 0px;
		        	margin-top: 5px;
		        	margin-bottom: 10px;
		        }

		        & + a {
		          margin-left: 26px;

		          @media(max-width: 600px){
		          	margin-left: 0px;
		          }
		        }
		        &:hover {
		          opacity: 0.6;
		          transform: scale(1.3);
		        }

		        svg{
						color: #dcaf27;
						margin-right: 6px;
					}

		        p{
		        	display: flex;
		        	align-items: center;

			        svg{
						color: #dcaf27;
						margin-right: 4px;
					}
				}	
		      }

	      a.hvr-underline-from-center {
	        display: inline-block;
	        vertical-align: middle;
	        -webkit-transform: perspective(1px) translateZ(0);
	        transform: perspective(1px) translateZ(0);
	        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	        position: relative;
	        overflow: hidden;
	        padding: 8px;
	      }

	      a.hvr-underline-from-center:before {
	        content: "";
	        position: absolute;
	        z-index: -1;
	        left: 51%;
	        right: 51%;
	        bottom: 0;
	        background: #dcaf27;
	        height: 4px;
	        -webkit-transition-property: left, right;
	        transition-property: left, right;
	        -webkit-transition-duration: 0.3s;
	        transition-duration: 0.3s;
	        -webkit-transition-timing-function: ease-out;
	        transition-timing-function: ease-out;
	      }
	      a.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
	        left: 0;
	        right: 0;
	      }
	    }
	  }


`;