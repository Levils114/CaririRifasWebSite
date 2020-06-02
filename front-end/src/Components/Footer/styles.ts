import styled from 'styled-components';

import marcaDagua from './../../Assets/Menu/marcadagua.png'
import marcaDagua2 from './../../Assets/Menu/marcadagua2.png'


export const FooterPrimary = styled.div`
	background: #0d0d0d url(${marcaDagua}) no-repeat 50% ;
	width: 100%;
	
	@media(max-width: 600px){
		background: #0d0d0d url(${marcaDagua2}) no-repeat 50% 75% ;
	}


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

		    	@media(max-width: 600px){
		    		margin-left: 10px;
		    		font-size: 14px;
		    	}

		    	& + p{
		    		margin-top:24px;
		    	}
		    }
	    }

	    
	    nav{

	    	display: flex;

		    a{
		    	color: #CCAD1E;
		    	

		    	& + a{
					margin-left: 4px;
				}
		    }

		    a.lastLink{
		    	margin-right: 26px;

		    	@media(max-width: 600px){
		    		margin-right: 4px;
		    	}
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