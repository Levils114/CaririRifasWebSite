import React, {useState} from 'react';

import { Container, SorteiosPage, Button, Filtros } from './styles';

import { Link } from 'react-router-dom';

import Header from './../../../Components/Header/';
import Footer from './../../../Components/Footer/';

import img4 from './../../../Assets/Menu/rifasdovale_1589114665.jpg';
import img5 from './../../../Assets/Menu/rifasdovale_1588040562.jpg';
import img6 from './../../../Assets/Menu/1.jpg';


const Sorteios: React.FC = () => {
	const [todos, setTodos] = useState(true);
	const [abertos, setAbertos] = useState(false);
	const [emBreve, setEmBreve] = useState(false);
	const [encerrado, setEncerrado] = useState(false);

	function handdleTodos(){
		 setTodos(true);
		 setAbertos(false);
		 setEmBreve(false);
		 setEncerrado(false);
	}

	function handdleAbertos(){
		 setAbertos(true);
		 setTodos(false);
		 setEmBreve(false);
		 setEncerrado(false);
	}

	function handdleEmBreve(){
		 setEmBreve(true);
		 setTodos(false);
		 setAbertos(false);
		 setEncerrado(false);
	}

	function handdleEncerrado(){
		 setEncerrado(true);
		 setTodos(false);
		 setAbertos(false);
		 setEmBreve(false);
	}

	console.log(todos);
	console.log(abertos);

	return(
		<Container>
			<Header />

			<Filtros>
					<div className="filtros">
						<Button className="firstButton" onClick={handdleTodos}>Todos</Button>
						<Button onClick={handdleAbertos}>Abertos</Button>
						<Button onClick={handdleEmBreve}>Em Breve</Button>
						<Button className="lastButton" onClick={handdleEncerrado}>Encerrado</Button>
					</div>	

					{todos===true && (
							<SorteiosPage>
								<div className="sorteios">
									<div className="model" id="emBreve">
								     	<p className="emBreve">Em Breve</p>
									     <img src={img4} alt="sorteioImg1"/>
									     <p className="modelo">Cruzer LT Turbo</p>
									     <p className="data">Sorteio dia 11/05/2020</p>
									     <Button typeOfButton="emBreve">
									     	<Link to="teste">Em Breve ✔</Link>
									     </Button>
								     </div>

								     <div className="model" id="encerrado">
							     		<p className="esgotado">Esgotado</p>
								     	<img src={img5} alt="sorteioImg2"/>
								     	<p className="modelo">Lander 255cc</p>
								     	<p className="data">Sorteio dia 11/05/2020</p>
								     	<Button typeOfButton="terminado">
								     		<Link to="teste">Ver Resultado ✔</Link>
								     	</Button>
							     	</div>

							     	<div className="model" id="aberto">
							     		<p className="comprar">Comprar</p>
								     	<img src={img6} alt="sorteioImg2"/>
								     	<p className="modelo">Range Rover</p>
								     	<p className="data">Sorteio dia 11/05/2020</p>
								     	<Button typeOfButton="comprar">
								     		<Link to="teste">Comprar Rifa ✔</Link>
								     	</Button>
							     	</div>
								</div> 
		    
							</SorteiosPage>
						)}

					{abertos===true && (
						<SorteiosPage>
							<div className="sorteios">
								<div className="model" id="aberto">
						     		<p className="comprar">Comprar</p>
							     	<img src={img6} alt="sorteioImg2"/>
							     	<p className="modelo">Range Rover</p>
							     	<p className="data">Sorteio dia 11/05/2020</p>
							     	<Button typeOfButton="comprar">
							     		<Link to="teste">Comprar Rifa ✔</Link>
							     	</Button>
						     	</div>
						     </div>	
						</SorteiosPage>
						)}

					{emBreve===true && (
						<SorteiosPage>
							<div className="sorteios">
								<div className="model" id="emBreve">
								     	<p className="emBreve">Em Breve</p>
									     <img src={img4} alt="sorteioImg1"/>
									     <p className="modelo">Cruzer LT Turbo</p>
									     <p className="data">Sorteio dia 11/05/2020</p>
									     <Button typeOfButton="emBreve">
									     	<Link to="teste">Em Breve ✔</Link>
									     </Button>
								     </div>
						     </div>	
						</SorteiosPage>
						)}

					{encerrado===true && (
						<SorteiosPage>
							<div className="sorteios">
							 <div className="model" id="encerrado">
							     	<p className="esgotado">Esgotado</p>
								     <img src={img5} alt="sorteioImg2"/>
								     <p className="modelo">Lander 255cc</p>
								     <p className="data">Sorteio dia 11/05/2020</p>
								     <Button typeOfButton="terminado">
								     	<Link to="teste">Ver Resultado ✔</Link>
								     </Button>
							 </div>
							</div> 
						</SorteiosPage>
						)}

					
			</Filtros>

			

			<Footer />
		</Container>
		);
}

export default Sorteios;