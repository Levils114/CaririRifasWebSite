import React from 'react'; // importando React da biblioteca 'react' para poder usar jsx

import Header from './../../Components/Header'; // importando o componente de cabeçalho
import Footer from './../../Components/Footer'; // importando o componente do rodapé

import Media from 'react-media'; // importando Media da biblioteca 'react-media' para poder usar media query no código

import {Link} from 'react-router-dom'; // importando a funcionalidade 'Link' da biblioteca 'react-router-dom'

import { Slide } from 'react-slideshow-image'; // importando a funcionalidade 'Slide' da biblioteca 'react-slideshow-image' para poder criar um slide de imagem no código
import { Container, Button } from './styles'; // importando as variáveis 'Container' e 'Button' de './styles.ts'

import {MdPayment} from 'react-icons/md'; // importando ícones da linha 13 até a 15
import {BsSearch, BsClock} from 'react-icons/bs';
import {FiCheckSquare} from 'react-icons/fi';

import img1 from './../../Assets/Menu/rifasdovale_1589114912.jpg'; //importando imagem do sorteio para o slide (IMAGEM MAIOR)
import img2 from './../../Assets/Menu/rifasdovale_1587692712.jpg'; //importando imagem do sorteio para o slide (IMAGEM MAIOR)
import img3 from './../../Assets/Menu/landrover_rifasdovale.jpg'; //importando imagem do sorteio para o slide (IMAGEM MAIOR)


import img4 from './../../Assets/Menu/rifasdovale_1589114665.jpg'; //importando imagem do sorteio para o implementr dentro de 'Sorteios' que fica logo abaixo do slide (IMAGEM MENOR)
import img5 from './../../Assets/Menu/rifasdovale_1588040562.jpg'; //importando imagem do sorteio para o implementr dentro de 'Sorteios' que fica logo abaixo do slide (IMAGEM MENOR)
import img6 from './../../Assets/Menu/1.jpg'; //importando imagem do sorteio para o implementr dentro de 'Sorteios' que fica logo abaixo do slide (IMAGEM MENOR)

import criasaLogo from './../../Assets/Menu/criasa.jpeg'; // importando a logo da Criasa

const properties = { // criando a variável 'properties' que é uma array com todas as configurações para o 'Slide'. Pode ser melhor bisto na linha 46
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  pauseOnHover: true,
  
}


const Menu = () => { // criando o componente 'Menu'
	return(
		<>
			<Container>
			<Header />

			
			<div className="slide-container"> {/* iniciando a div para o slide de imagens */}
				<Slide {...properties}> {/* iniciando o slide de imagens e logo abaixo tem todos os componentes desse slide além da imagem, como o botão, nome da marca do carro ou moto, ano e modelo. OBS: cada imagem fica dentro de uma div com classe 'each-slide', ou seja, cada slide. O slide suporta muitas divs 'each-slide', então pode ter mais do que três, mas o mínimo que ele aceita são duas, então sempre tem que ter duas ou mais */}
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

			     <div className="sorteiosContainer"> {/* criação do container para os sorteios */}
			     	<div className="title">
			     		<p className="main">SORTEIOS</p>
			     	</div>	

			     	<div className="divisor">
			     		<button></button>
			     	</div>

			     	
				     <div className="sorteios"> {/* div onde ficarão os sorteios */}
				     	<div className="model"> {/* cada sorteio fica dentro de uma div com classe 'model', onde terá além da imagem, o nome, ano, data e etc */}
				     		<p className="emBreve">Em Breve</p> {/* OBS: perceba que cada 'p' em cada 'model' possui uma classe, eu fiz isso para mudança de cores, então quando você quiser criar uma verde, você apenas muda a classe de 'emBreve' ou 'esgotado' para 'comprar' */}
					     	<img src={img6} alt="sorteioImg2"/>
					     	<p className="modelo">Range Rover</p>
					     	<p className="data">Sorteio dia 11/05/2020</p>
					     	<Button typeOfButton="emBreve"> {/* OBS: cada botão dentro de algum model, tem seu estilo, por isso criei esse método 'typeOfButton', que vai dizer se é 'emBreve', 'comprar' ou 'terminado', mudando assim de laranja, verde e vermelho de acordo com o que você escolher */}
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

			    

			     <div className="filantropiaContainer"> {/* Container de filantropia */}
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

export default Menu; {/* exportando o componente 'Menu' */}