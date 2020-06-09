import React, {useState} from 'react'; // importando 'React' e a funcionalidade 'useState' da biblioteca 'react'

import { Container, SorteiosPage, Button, Filtros } from './styles'; // importando as variáveis 'Container', 'SorteiosPage', 'Button' e 'Filtros' de './styles.ts'

import { Link } from 'react-router-dom'; // importando a funcionalidade 'Link' de 'react-router-dom'

import Header from './../../../Components/Header/'; // importando o componente de cabeçalho
import Footer from './../../../Components/Footer/'; // importando o componente do rodapé

import {BsLockFill, BsUnlockFill, BsClockFill, BsList} from 'react-icons/bs'; // importando ícone

import img4 from './../../../Assets/Menu/rifasdovale_1589114665.jpg'; // importando imagens do sorteio
import img5 from './../../../Assets/Menu/rifasdovale_1588040562.jpg'; // importando imagens do sorteio
import img6 from './../../../Assets/Menu/1.jpg'; // importando imagens do sorteio


const Sorteios: React.FC = () => { // criando um componente chamado 'Sorteios'
	const [todos, setTodos] = useState(true); // criando uma variável chamada 'todos' e outra chamada 'setTodos', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'todos' à partir de 'setTodos', nesse caso, a variável inicia como 'true', pois o useState está com '(true)'
	const [abertos, setAbertos] = useState(false); // criando uma variável chamada 'abertos' e outra chamada 'setAbertos', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'abertos' à partir de 'setAbertos', nesse caso, a variável inicia como 'false', pois o useState está com '(false)'
	const [emBreve, setEmBreve] = useState(false); // criando uma variável chamada 'emBreve' e outra chamada 'setEmBreve', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'emBreve' à partir de 'setEmBreve', nesse caso, a variável inicia como 'false', pois o useState está com '(false)'
	const [encerrado, setEncerrado] = useState(false); // criando uma variável chamada 'encerrado' e outra chamada 'setEncerrado', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'encerrado' à partir de 'setEncerrado', nesse caso, a variável inicia como 'false', pois o useState está com '(false)'

	function handdleTodos(){ // criando uma função 'handdleTodos' que servirá para mostrar todos os sorteios
		 setTodos(true); // adicionando o valor de 'true' na variável 'todos'
		 setAbertos(false); // adicionando o valor de 'false' na variável 'abertos'
		 setEmBreve(false); // adicionando o valor de 'false' na variável 'emBreve'
		 setEncerrado(false); // adicionando o valor de 'false' na variável 'encerrado'
	}

	function handdleAbertos(){ // criando uma função 'handdleAbertos' que servirá para mostrar todos os sorteios abertos
		 setAbertos(true); // adicionando o valor de 'true' na variável 'abertos'
		 setTodos(false); // adicionando o valor de 'false' na variável 'todos'
		 setEmBreve(false); // adicionando o valor de 'false' na variável 'emBreve'
		 setEncerrado(false); // adicionando o valor de 'false' na variável 'encerrado'
	}

	function handdleEmBreve(){ // criando uma função 'handdleEmBreve' que servirá para mostrar todos os sorteios que irão de vir
		 setEmBreve(true); // adicionando o valor de 'true' na variável 'emBreve'
		 setTodos(false); // adicionando o valor de 'false' na variável 'todos'
		 setAbertos(false); // adicionando o valor de 'false' na variável 'abertos'
		 setEncerrado(false); // adicionando o valor de 'false' na variável 'encerrado'
	}

	function handdleEncerrado(){ // criando uma função 'handdleEncerrado' que servirá para mostrar todos os sorteios encerrados
		 setEncerrado(true); // adicionando o valor de 'true' na variável 'encerrado'
		 setTodos(false); // adicionando o valor de 'false' na variável 'todos'
		 setAbertos(false); // adicionando o valor de 'false' na variável 'abertos'
		 setEmBreve(false); // adicionando o valor de 'false' na variável 'emBreve'
	}


	return(
		<Container>
			<Header />

			<div className="background">
				<Filtros>
						<div className="filtros"> {/* div onde ficarão os botões de filtro */}
							<Button className="firstButton" onClick={handdleTodos}><BsList size={22}/><p>Todos</p></Button> {/* botão criado, que ao ser clicado, chama a função handdleTodos */}
							<Button onClick={handdleAbertos}><BsUnlockFill size={22} /><p>Abertos</p></Button> {/* botão criado, que ao ser clicado, chama a função handdleAbertos */}
							<Button onClick={handdleEmBreve}><BsClockFill size={22} /><p>Em Breve</p></Button> {/* botão criado, que ao ser clicado, chama a função handdleEmBreve */}
							<Button className="lastButton" onClick={handdleEncerrado}><BsLockFill size={22} /><p>Encerrado</p></Button> {/* botão criado, que ao ser clicado, chama a função handdleEncerrado */}
						</div>	

						{todos===true && ( // aqui diz que caso a variável 'todos' esteja como 'true', execute o código da linha 66 até 102
								<SorteiosPage>
									<div className="sorteios">

										<div className="model" id="aberto"> {/* cada sorteio fica dentro de uma div com classe 'model', onde terá além da imagem, o nome, ano, data e etc */}
								     		<p className="emBreve">Em Breve</p> {/* OBS: perceba que cada 'p' em cada 'model' possui uma classe, eu fiz isso para mudança de cores, então quando você quiser criar uma verde, você apenas muda a classe de 'emBreve' ou 'esgotado' para 'comprar' */}
									     	<img src={img6} alt="sorteioImg2"/>
									     	<p className="modelo">Range Rover</p>
									     	<p className="data">Sorteio dia 11/05/2020</p>
									     	<Button typeOfButton="emBreve"> {/* OBS: cada botão dentro de algum model, tem seu estilo, por isso criei esse método 'typeOfButton', que vai dizer se é 'emBreve', 'comprar' ou 'terminado', mudando assim de laranja, verde e vermelho de acordo com o que você escolher */}
									     		<Link to="/sorteio/range-rover">Em Breve ✔</Link>
									     	</Button>
								     	</div>

										<div className="model" id="emBreve">
									     	<p className="comprar">Comprar</p>
										     <img src={img4} alt="sorteioImg1"/>
										     <p className="modelo">Cruzer LT Turbo</p>
										     <p className="data">Sorteio dia 11/05/2020</p>
										     <Button typeOfButton="comprar">
										     	<Link to="/sorteio/cruzer-lt-turbo">Comprar ✔</Link>
										     </Button>
									     </div>

									     <div className="model" id="encerrado">
								     		<p className="esgotado">Esgotado</p>
									     	<img src={img5} alt="sorteioImg2"/>
									     	<p className="modelo">Lander 255cc</p>
									     	<p className="data">Sorteio dia 11/05/2020</p>
									     	<Button typeOfButton="terminado">
									     		<Link to="/sorteio/lander-255-cc">Ver Resultado ✔</Link>
									     	</Button>
								     	</div>

									</div> 
			    
								</SorteiosPage>
							)}

						{abertos===true && ( // aqui diz que caso a variável 'abertos' esteja como 'true', execute o código da linha 105 até 118
							<SorteiosPage>
								<div className="sorteios">
									<div className="model" id="emBreve">
									     <p className="comprar">Comprar</p>
										 <img src={img4} alt="sorteioImg1"/>
										 <p className="modelo">Cruzer LT Turbo</p>
										 <p className="data">Sorteio dia 11/05/2020</p>
										 <Button typeOfButton="comprar">
										    <Link to="/sorteio/cruzer-lt-turbo">Comprar ✔</Link>
										 </Button>
									</div>
							     </div>	
							</SorteiosPage>
							)}

						{emBreve===true && ( // aqui diz que caso a variável 'emBreve' esteja como 'true', execute o código da linha 121 até 135
							<SorteiosPage>
								<div className="sorteios">
									<div className="model" id="aberto">
								     		<p className="emBreve">Em Breve</p>
									     	<img src={img6} alt="sorteioImg2"/>
									     	<p className="modelo">Range Rover</p>
									     	<p className="data">Sorteio dia 11/05/2020</p>
									     	<Button typeOfButton="emBreve">
									     		<Link to="/sorteio/range-rover">Em Breve ✔</Link>

									     	</Button>
								     	</div>
							     </div>	
							</SorteiosPage>
							)}

						{encerrado===true && ( // aqui diz que caso a variável 'encerrado' esteja como 'true', execute o código da linha 138 até 151
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

			</div>
			

			<Footer />
		</Container>
		);
}

export default Sorteios; // exportando o componente Sorteios