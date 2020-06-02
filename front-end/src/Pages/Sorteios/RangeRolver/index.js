import React, {useState, useEffect} from 'react';

import {Container, Button} from './styles';

import api from './../../../Service/api';

import {Link} from 'react-router-dom';

import Header from './../../../Components/Header/';
import Footer from './../../../Components/Footer/';


import {Slide} from 'react-slideshow-image';

import img1 from './../../../Assets/Sorteios/RangeRover/1.jpg';
import img2 from './../../../Assets/Sorteios/RangeRover/2.jpg';
import img3 from './../../../Assets/Sorteios/RangeRover/3.jpg';
import img4 from './../../../Assets/Sorteios/RangeRover/4.jpg';
import img5 from './../../../Assets/Sorteios/RangeRover/5.jpg';
import img6 from './../../../Assets/Sorteios/RangeRover/6.jpg';


const RangeRover = () => {

	const properties = {
	  transitionDuration: 500,
	  indicators: true,
	  infinite: true,
	  indicators: false,
	  arrows: true,
	  pauseOnHover: true,
	  
	}

	const [users, setUsers] = useState([]);
	const correctUsers = users.filter(user => user.sorteio === "Range Rover")
	const correctRifa = correctUsers.map(user => user.rifa);

	let correctUsersByRifa = {};
	
	correctUsers.forEach(user => {
		  correctUsersByRifa[user.rifa] = user;
	});

	let countLimit = 999;
	let numbersOfRifas = [];
	let maskRifa = num => {
	  let requiredLength = countLimit.toString().length;
	  let numString = num.toString();

	  if(requiredLength > numString.length) {
	    numString = "0".repeat(requiredLength - numString.length) + numString;
	  }
	  return numString;
	}

	for(let rifa = 0; rifa <= countLimit; rifa++) {
	  let number = maskRifa(rifa);
	  let user = typeof(correctUsersByRifa[number]) !== "undefined" ? correctUsersByRifa[number] : {
		  	estado: "",
		    name: null,
		    rifa: number
		};
	  numbersOfRifas.push({
	    number,
	    user
	  });
	}

	
	 	


	useEffect(() => {
		api.get('/users').then(response => {setUsers(response.data)});
	}, []);

	console.log(correctRifa);
	

	return (
		<Container>
			<Header />
				<div className="datas">
					<div className="slider">
						<Slide {...properties}>
							<img src={img1} alt="img1"/>
							<img src={img2} alt="img2"/>
							<img src={img3} alt="img3"/>
							<img src={img4} alt="img4"/>
							<img src={img5} alt="img5"/>
							<img src={img6} alt="img6"/>
						</Slide>
					</div>	

					<div className="description">
						<h3>Range Rover</h3>

						<div className="divisor">
							<button></button>
						</div>

						<p><b>Ano</b>: 2017</p>
						<p><b>Rodas</b>: Aro 20 <br/> 30 mil km</p>
						<p><b>Suspensão</b>: Preparada</p>
						<p><b>Motor</b>: 1.4</p>
						<p><b>Câmbio</b>: Automatico <br/>Completo <br/>Impecável</p>
						<br/>
						<p>* Comprando uma centena por R$ 100,00. <br/>Você concorre a um automóvel Cruze LT Turbo - 2017.</p>
					</div>
				</div>

				<div className="divisor2">
					<button></button>
				</div>

				<div className="alert">
					<span>ALERTA: OS SORTEIOS SÃO PROIBIDOS PARA MENORES DE 18 ANOS</span>
				</div>

				<div className="stylesOfButtons">
					<button className="aberto">Aberto</button>
					<button className="reservado">Reservado</button>
					<button className="pago">Pago</button>
				</div>

				<div className="rifas">
					{numbersOfRifas.map(rifa => (
						<>
							<div className="divToTooltip">
								<Button estado={rifa.user.estado}>
									<Link to={`/range-rover/cadastro/${rifa.number}`}>{rifa.number}</Link>
								</Button>

								{rifa.user.estado === "reservado" && (
									<span>A rifa de número {rifa.number} está reservada por {rifa.user.name}</span>
									)}

								{rifa.user.estado === "pago" && (
									<span>A rifa de número {rifa.number} está paga por {rifa.user.name}</span>
									)}
							</div>	
						</>	

						))}
				</div>
			<Footer />
		</Container>
		);
}

export default RangeRover;