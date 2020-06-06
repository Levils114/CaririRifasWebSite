import React from 'react';

import Header from './../../Components/Header';
import Footer from './../../Components/Footer';

import Media from 'react-media';

import {Link} from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import { Container, Button } from './styles';

import {MdPayment} from 'react-icons/md';
import {BsSearch, BsClock} from 'react-icons/bs';
import {FiCheckSquare} from 'react-icons/fi';

import img1 from './../../Assets/Menu/rifasdovale_1589114912.jpg';
import img2 from './../../Assets/Menu/rifasdovale_1587692712.jpg';
import img3 from './../../Assets/Menu/landrover_rifasdovale.jpg';
import img4 from './../../Assets/Menu/rifasdovale_1589114665.jpg';
import img5 from './../../Assets/Menu/rifasdovale_1588040562.jpg';
import img6 from './../../Assets/Menu/1.jpg';

import criasaLogo from './../../Assets/Menu/criasa.jpeg';

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
		              <button>
		              	<Link to="/sorteio/cruzer-lt-turbo">PARTICIPE</Link>
		              </button>
		              <p className="description">Comprando uma centena por R$ 100,00 - Você concorre a um carro</p>	
		              <img src={img1} alt="slideImg1"/>
		            </div>
		          </div>
		          <div className="each-slide">
		            <div className='img-background'>
		              <p className="marca">YAMAHA</p>
		              <span>LANDER 255CC</span>
		              <p className="ano">2017</p>
		              <button>
		              	<Link to="/sorteio/lander-255-cc">ENCERRADO</Link>
		              </button>	
		              <p className="description">Comprando uma centena por R$ 100,00 - Você concorre a um moto</p>	
		              <img src={img2} alt="slideImg2"/>
		            </div>
		          </div>
		          <div className="each-slide">
		            <div className='img-background'>

		              <p className="marca">DISCOVERY</p>
		              <span>LAND ROVER</span>
		              <p className="ano">2017</p>

		              <button>
		              	<Link to="/sorteio/range-rover">EM BREVE</Link>
		              </button>

		              <p className="description">Comprando uma centena por R$ 100,00 - Você concorre a um carro</p>		
		              
		              <img src={img3} alt="slideImg3"/>
		            </div>
		          </div>
		        </Slide>
		     </div>

		     <div className="divToBackground">

			     <div className="sorteiosContainer">
			     	<div className="title">
			     		<p className="main">SORTEIOS</p>
			     	</div>	

			     	<div className="divisor">
			     		<button></button>
			     	</div>

			     	
				     <div className="sorteios">
				     	<div className="model">
				     		<p className="emBreve">Em Breve</p>
					     	<img src={img6} alt="sorteioImg2"/>
					     	<p className="modelo">Range Rover</p>
					     	<p className="data">Sorteio dia 11/05/2020</p>
					     	<Button typeOfButton="emBreve">
					     		<Link to="/sorteio/range-rover">Em Breve ✔</Link>
					     	</Button>
				     	</div>

				     	<div className="model">
				     		<p className="comprar">Comprar</p>
					     	<img src={img4} alt="sorteioImg1"/>
					     	<p className="modelo">Cruzer LT Turbo</p>
					     	<p className="data">Sorteio dia 11/05/2020</p>
					     	<Button typeOfButton="comprar">
					     		<Link to="/sorteio/cruzer-lt-turbo">Comprar ✔</Link>
					     	</Button>
				     	</div>

				     	<div className="model">
				     		<p className="esgotado">Esgotado</p>
					     	<img src={img5} alt="sorteioImg2"/>
					     	<p className="modelo">Lander 255cc</p>
					     	<p className="data">Sorteio dia 11/05/2020</p>
					     	<Button typeOfButton="terminado">
					     		<Link to="/sorteio/lander-255-cc">Ver Resultado ✔</Link>
					     	</Button>
				     	</div>
				     </div>
			     </div>

			    

			     <div className="filantropiaContainer">
			     	<div className="title">
					     <p className="main">FILANTROPIA</p>
					</div>

			     	<div className="divisor">
			     		<button></button>
			     	</div>

				     <div className="filantropia">
				     	<img src={criasaLogo} />
				     	<p>A Cariri de Prêmios tem como intuito ajudar o Instituto Criasa, que há<br/> anos tem como objetivo ser uma casa de referência para implementação<br/> de ações sócio assistências.</p>
				     </div>
			     </div>
			</div>


		     <div className="footer">
		     	<Footer />
		     </div>
	        </Container>
		</>	
	);
}

export default Menu;