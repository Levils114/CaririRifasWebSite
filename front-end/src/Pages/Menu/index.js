import React from 'react';

import Header from './../../Components/Header';

import { Slide } from 'react-slideshow-image';
import { Container } from './styles';

import img1 from './../../Assets/Menu/rifasdovale_1589114912.jpg';
import img2 from './../../Assets/Menu/rifasdovale_1587692712.jpg';
import img3 from './../../Assets/Menu/landrover_rifasdovale.jpg';

const properties = {
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  
}


const Menu = () => {
	return(
		<>
			<Container>
			<Header />


			<div className="slide-container">
				<Slide {...properties}>
		          <div className="each-slide">
		            <div className='img-background'>
		              <p className="marca">CHEVROLET</p>
		              <span>CRUZE LT TURBO</span>
		              <p className="ano">2017</p>
		              <img src={img1}/>
		            </div>
		          </div>
		          <div className="each-slide">
		            <div className='img-background'>
		              <p className="marca">CHEVROLET</p>
		              <span>CRUZE LT TURBO</span>
		              <p className="ano">2017</p>
		              <img src={img2}/>
		            </div>
		          </div>
		          <div className="each-slide">
		            <div className='img-background'>
		              <p className="marca">DISCOVERY</p>
		              <span>LAND ROVER</span>
		              <p className="ano">2017</p>
		              <img src={img3}/>
		            </div>
		          </div>
		        </Slide>
		     </div>
	        </Container>
		</>	
		);
}

export default Menu;