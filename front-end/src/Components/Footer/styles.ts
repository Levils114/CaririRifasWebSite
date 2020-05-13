import styled from 'styled-components';


export const FooterPrimary = styled.div`
	background-color: #0d0d0d;
	height: 120px;
	width: auto;
	


	header {
	    margin: 0 auto;
	    display: flex;
		justify-content: space-between;
		align-items: center;
	    
	    div{
	    	margin-top: 8px;
	    	align-items: center;

	    	p{
		    	font-size: 16px;
		    	font-weight: 500;
		    	margin-top: 20px;
		    	margin-left: 34px;
		    }
	    }

	    
	    nav{
		    a{
		    	color: #d1d1d1;
		    	margin-left: 833px;

		    	& + a{
					margin-left: 4px;
				}
		    }

		    a.lastLink{
		    	margin-right: 26px;
		    }

		    svg{
				transition: all 0.2s;
				margin-top: 28px;
			}

			a:hover svg{
				transform: scale(1.3);
			}
		  }
		}  
`