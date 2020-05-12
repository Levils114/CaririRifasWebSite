import styled from 'styled-components';


export const FooterPrimary = styled.div`
	background-color: #0d0d0d;
	height: 120px;


	header {
	    width: 1120px;
	    margin: 0 auto;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;

	    div{
	    	margin-top: 8px;
	    	align-items: center;
	    	
	    }

	    p{
	    	font-size: 16px;
	    	font-weight: 500;
	    	margin-top: 20px;
	    }

	    a{
	    	color: #d1d1d1;

	    	& + a{
				margin-left: 4px;
			}
	    }

	    svg{
			transition: all 0.2s;
			margin-top: 16px;
		}

		a:hover svg{
			transform: scale(1.3);
		}
	  }
`