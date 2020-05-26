import styled from 'styled-components';

export const FirstHeader = styled.div`
	display: flex;
	background: #2e2e2e;
	height: 30px;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	p{
		margin-left: 20px;
		font-weight: 500;
	}

	div{
		display: flex;
	}

	

	button{
		background: transparent;
		border: 0;

		& + button{
			margin-left: 8px;
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
	}
`;


export const HeaderPrimary = styled.div`
	background-color: #0d0d0d;
	height: 150px;

	header {
	    width: 100%;
	    margin: 0 auto;
	    display: flex;
		align-items: center;
	    justify-content: space-between;

	    div{
	    	display: flex;
	    	

		    p{
		    	font-size: 30px;
		    	font-weight: 500;
		    	margin-top: 14px;
		    	color: #CCAD1E;
		    }

		    img{
		    	height: 160px;
		    	width: 290px;
		    	margin-left: 100px;
		    	
		    }
		}

	    nav {
	    	margin-top: -10px;

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
		          margin-left: 26px;
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
`