import React, {useState, useEffect} from 'react';

import api from './../../../Service/api';

import {Container, Button} from './styles';

import {Link} from 'react-router-dom';

import Header from './../../../Components/Header/';
import Footer from './../../../Components/Footer/';

import {Slide} from 'react-slideshow-image';

import img1 from './../../../Assets/Sorteios/Lander255CC/1.jpg';


const Lander255CC = () => {

	const properties = {
	  transitionDuration: 500,
	  indicators: true,
	  infinite: true,
	  indicators: false,
	  arrows: true,
	  pauseOnHover: true,
	  
	}

	const [users, setUsers] = useState([]);
	const correctUsers = users.filter(user => user.sorteio === "Lander 255 CC")
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


	return (
		<Container>
			<Header />
				<div className="datas">
					<div className="slider">
						<Slide {...properties}>
							<img src={img1} alt="img1"/>
							<img src={img1} alt="img1"/>
							
						</Slide>
					</div>	

					<div className="description">
						<h3>Lander 255 CC</h3>

						<div className="divisor">
							<button></button>
						</div>

						<div className="centena">
							<p><b>Centena Premiada: 800</b></p>
						</div>

						<div className="ganhador">
							<p><b>Ganhador: José da Silva</b></p>
						</div>

						<p><b>Ano</b>: 2017</p>
						<p><b>Rodas</b>: Aro 20 <br/> 30 mil km</p>
						<p><b>Suspensão</b>: Preparada</p>
						<p><b>Motor</b>: 1.4</p>
						<p><b>Câmbio</b>: Automatico <br/>Completo <br/>Impecável</p>
						<br/>
						<p>* Comprando uma centena por R$ 100,00. <br/>Você concorre a um automóvel Lander 255 CC - 2017.</p>

						
					</div>
				</div>

				<div className="divisor2">
					<button></button>
				</div>

				<div className="alert">
					<span>ALERTA: OS SORTEIOS SÃO PROIBIDOS PARA MENORES DE 18 ANOS</span>
				</div>

			<Footer />
		</Container>
		);
}

export default Lander255CC;