import React from 'react'; // importando React da biblioteca 'react' para poder usar jsx

import { Switch, Route } from 'react-router-dom'; // importando as funcionalidades 'Switch' e 'Route'da biblioteca 'react-router-dom'  

import Menu from './../Pages/Menu/index.js'; // importando o componente Menu
import Empresa from './../Pages/Empresa/'; // importando o componente  Empresa
import Sorteios from './../Pages/Sorteios/Dashboard/index'; // importando o componente Sorteios
import ComoPagar from './../Pages/Como-Pagar/'; // importando o componente ComoPagar
import Contatos from './../Pages/Contatos/'; // importando o componente Contatos
import DashboardAdmin from './../Pages/Admin/Dashboard/index'; // importando o componente DashboardAdmin
import CruzerLTTurbo from './../Pages/Sorteios/CruzerLTTurbo/index'; // importando o componente CruzerLTTurbo
import RangeRover from './../Pages/Sorteios/RangeRolver/index'; // importando o componente RangeRover
import Lander255CC from './../Pages/Sorteios/Lander255CC/index'; // importando o componente Lander255CC
import CadastroCruzerLTTurbo from './../Pages/Sorteios/CruzerLTTurbo/Cadastro/';  // importando o componente CadastroCruzerLTTurbo
import CadastroRangeRover from './../Pages/Sorteios/RangeRolver/Cadastro/'; // importando o componente CadastroRangeRover


const Routes: React.FC = () => { // criando um componente chamado 'Routes'
	return (
		<Switch>
			<Route path="/" exact component={Menu} /> {/* criando uma rota '/' para o componente 'Menu' */}
			<Route path="/empresa" component={Empresa} /> {/* criando uma rota '/empresa' para o componente 'Empresa' */}
			<Route path="/sorteios" component={Sorteios} /> {/* criando uma rota '/sorteios' para o componente 'Sorteios' */}
			<Route path="/como-pagar" component={ComoPagar} /> {/* criando uma rota '/como-pagar' para o componente 'ComoPagar' */}
			<Route path="/contatos" component={Contatos} /> {/* criando uma rota '/contatos' para o componente 'Contatos' */}
			<Route path="/admin-cariri-de-premios" component={DashboardAdmin} /> {/* criando uma rota '/admin-cariri-de-premios' para o componente 'DashboardAdmin' */}
			<Route path="/sorteio/cruzer-lt-turbo" component={CruzerLTTurbo} /> {/* criando uma rota '/sorteio/cruzer-lt-turbo' para o componente 'CruzerLTTurbo' */}
			<Route path="/sorteio/range-rover" component={RangeRover} /> {/* criando uma rota '/sorteio/range-rover' para o componente 'RangeRover' */}
			<Route path="/sorteio/lander-255-cc" component={Lander255CC} /> {/* criando uma rota '/sorteio/lander-255-cc' para o componente 'Lander255CC' */}
			<Route path="/cruzer-lt-turbo/cadastro/:number" component={CadastroCruzerLTTurbo} /> {/* criando uma rota '/cruzer-lt-turbo/cadastro/:number' para o componente 'CadastroCruzerLTTurbo'. OBS: esse '/:number', significa que a rota recebera um número, no caso, será a rifa que será cadastrada */}
			<Route path="/range-rover/cadastro/:number" component={CadastroRangeRover} /> {/* criando uma rota '/range-rover/cadastro/:number' para o componente 'CadastroRangeRover'. OBS: esse '/:number', significa que a rota recebera um número, no caso, será a rifa que será cadastrada  */}
		</Switch>
		);
}

export default Routes; // exportando o componente 'Routes'