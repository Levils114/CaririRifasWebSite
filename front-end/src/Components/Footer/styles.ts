import styled from 'styled-components';

import marcaDagua from './../../Assets/Menu/marcadagua.png'


export const FooterPrimary = styled.div`
	background: #0d0d0d url(${marcaDagua}) no-repeat 50% ;
	width: 100%;
	


	header {
		height: 180px;
	    margin: 0 auto;
	    display: flex;
		justify-content: space-between;
		align-items: center;
	    
	    div{
	    	
	    	align-items: center;
	    	

	    	p{
		    	font-size: 16px;
		    	font-weight: 500;
		    	margin-left: 34px;

		    	& + p{
		    		margin-top:24px;
		    	}
		    }
	    }

	    
	    nav{


		    a{
		    	color: #d1d1d1;
		    	

		    	& + a{
					margin-left: 4px;
				}
		    }

		    a.lastLink{
		    	margin-right: 26px;
		    }

		    svg{
				transition: all 0.2s;
				
			}

			a:hover svg{
				transform: scale(1.3);
			}
		  }
		}  
`