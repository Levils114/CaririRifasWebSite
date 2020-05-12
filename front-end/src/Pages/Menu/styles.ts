import styled from 'styled-components';

import img1 from './../../Assets/Menu/car1.png';
import img2 from './../../Assets/Menu/car2.jpg';
import img3 from './../../Assets/Menu/car3.jpg';

export const Container = styled.div`
	
	div.img-background{
		img{
			width: 100%;
			height: 530px;
		}	

		span{
			position: absolute;
			font-size: 50px;
			color: #fff;
			margin-left: 180px;
			margin-top: 260px;
			font-weight: 500;
		} 

		p{
			position: absolute;
		}

		p.marca{
			margin-left: 185px;
			margin-top: 230px;
			font-size: 25px;
			color: #fff;
		}

		p.ano{
			margin-left: 185px;
			margin-top: 320px;
			font-size: 25px;
			color: #fff;
		}
	}




	div.slide-container {
	  width: 100%;
	  height: 100%;
	  margin: auto; 


	}
`