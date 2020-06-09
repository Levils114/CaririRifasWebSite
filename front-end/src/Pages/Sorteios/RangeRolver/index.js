import React, {useState, useEffect} from 'react'; // importando 'React' e as funcionalidades 'useState' e 'useEffect' da biblioteca 'react'

import {Container, Button} from './styles'; // importando as variáveis 'Container' e 'Button' de './styles.ts'

import api from './../../../Service/api'; // importando a variável 'api', no caso, a variável que faz conexão com o banco de dados

import {Link} from 'react-router-dom'; // importando a funcionalidade 'Link' de 'react-router-dom'
 
import Header from './../../../Components/Header/'; // importando o componente de cabeçalho
import Footer from './../../../Components/Footer/'; // importando o componente do rodapé


import {Slide} from 'react-slideshow-image'; // importando a funcionalidade 'Slide' da biblioteca 'react-slideshow-image' para poder criar um slide de imagem no código

import img1 from './../../../Assets/Sorteios/RangeRover/1.jpg'; // importando imagens do carro que será sorteado
import img2 from './../../../Assets/Sorteios/RangeRover/2.jpg'; // importando imagens do carro que será sorteado
import img3 from './../../../Assets/Sorteios/RangeRover/3.jpg'; // importando imagens do carro que será sorteado
import img4 from './../../../Assets/Sorteios/RangeRover/4.jpg'; // importando imagens do carro que será sorteado
import img5 from './../../../Assets/Sorteios/RangeRover/5.jpg'; // importando imagens do carro que será sorteado
import img6 from './../../../Assets/Sorteios/RangeRover/6.jpg'; // importando imagens do carro que será sorteado


const RangeRover = () => { // criando um componente chamado 'RangeRover'

	const properties = { // criando a variável 'properties' que é uma array com todas as configurações para o 'Slide'. Pode ser melhor bisto na linha 86
	  transitionDuration: 500,
	  indicators: true,
	  infinite: true,
	  indicators: false,
	  arrows: true,
	  pauseOnHover: true,
	  
	}

	const [users, setUsers] = useState([]); // criando uma variável chamada 'users' e outra chamada 'setUsers', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'users' à partir de 'setUsers', nesse caso, a variável inicia com um array vazio
	const correctUsers = users.filter(user => user.sorteio === "Range Rover") // é criado uma variável 'correctUsers' onde é implementado um filtro em 'users' para encontrar aqueles que o sorteio for igual 'Range Rover', no caso, o sorteio da página. OBS, esse nome do sorteio tem que ser OBRIGATORIAMENTE o mesmo nome que declarado na tela de cadastro, se não, não funciona, ou seja, OBRIGATORIAMENTE, na criação de um novo sorteio, esse valor sempre mudará
	const correctRifa = correctUsers.map(user => user.rifa); // é criado uma variável 'correctRifa' que mapeia as rifas encontradas em 'correctUsers'

	let correctUsersByRifa = {}; // criando um variável 'correctUsersByRifa' e declarando ela como um objeto vazio 
	
	correctUsers.forEach(user => { // dessa linha até a linha 68 nada mais é do que a criação de um gerador de rifas com um limite de 999 rifas, esse valor pode ser mudado na linha 45
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

	
	 	


	useEffect(() => { // aqui é utilizado o 'useEffect' para chamar o backend da aplicação
		api.get('/users').then(response => {setUsers(response.data)});// aqui lista todos os usuários achados no banco de dados e os armazena na variável 'users'
	}, []);

	

	return (
		<Container>
			<Header />
				<div className="datas"> {/* aqui é declarada uma variável chamada 'datas', onde ficarão os dados do que está sendo sorteado, como imagens, nome, ano, modelo e etc */}
					<div className="slider"> {/* aqui é declarado a div para o slide de imagens */}
						<Slide {...properties}>
							<img src={img1} alt="img1"/>
							<img src={img2} alt="img2"/>
							<img src={img3} alt="img3"/>
							<img src={img4} alt="img4"/>
							<img src={img5} alt="img5"/>
							<img src={img6} alt="img6"/>
						</Slide>
					</div>	

					<div className="description"> {/* aqui é declarado a div para a descrição do produto */}
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

				<div className="rifas"> {/* aqui é declarado a div onde ficarão as rifas */}
					{numbersOfRifas.map(rifa => ( // aqui é feito um mapeamento na variável 'numbersOfRifas' e para cada rifa encontrada, o código da linha 122 até a 137 será executado
						<>
							<div className="divToTooltip">
								<Button estado={rifa.user.estado}> {/* aqui é iniciado a tag 'Button' com o método 'estado', esse estado vai fazer com que o botão mude de cor de acordo com o estado. O 'estado' pode assumir os valores de "" (caso ainda não esteja reservado), "reservado" (caso a rifa esteja reservada) e "pago" (caso a rifa esteja paga) */}
									<Link to={`/range-rover/cadastro/${rifa.number}`}>{rifa.number}</Link> {/* aqui é criado o link para o cadastro da rifa */}
								</Button>

								{rifa.user.estado === "reservado" && ( // aqui é criado uma condicional para caso o estado esteja como 'reservado', mostre o tooltip abaixo
									<span>A rifa de número {rifa.number} está reservada por {rifa.user.name}</span> {/* o tooltip mostra uma mensagem com a rifa reservada e quem a reservou */}
									)}

								{rifa.user.estado === "pago" && ( // aqui é criado uma condicional para caso o estado esteja como 'pago', mostre o tooltip abaixo
									<span>A rifa de número {rifa.number} está paga por {rifa.user.name}</span> {/* o tooltip mostra uma mensagem com a rifa paga e quem a pagou */}
									)}
							</div>	
						</>	

						))}
				</div>
			<Footer />
		</Container>
		);
}

export default RangeRover; // exportando o component 'RangeRover'