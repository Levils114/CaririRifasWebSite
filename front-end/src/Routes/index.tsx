import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Menu from './../Pages/Menu/index.js';
import Empresa from './../Pages/Empresa/';
import Sorteios from './../Pages/Sorteios/Dashboard/index';
import ComoPagar from './../Pages/Como-Pagar/';
import Contatos from './../Pages/Contatos/';
import Admin from './../Pages/Admin/Dashboard/';
import CruzerLTTurbo from './../Pages/Sorteios/CruzerLTTurbo/index';
import RangeRover from './../Pages/Sorteios/RangeRolver/index';
import Lander255CC from './../Pages/Sorteios/Lander255CC/index';
import CadastroCruzerLTTurbo from './../Pages/Sorteios/CruzerLTTurbo/Cadastro/';
import CadastroRangeRover from './../Pages/Sorteios/RangeRolver/Cadastro/';
import CadastroLander255CC from './../Pages/Sorteios/Lander255CC/Cadastro/';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Menu} />
			<Route path="/empresa" component={Empresa} />
			<Route path="/sorteios" component={Sorteios} />
			<Route path="/como-pagar" component={ComoPagar} />
			<Route path="/contatos" component={Contatos} />
			<Route path="/admin-page-cariri-de-prêmios" component={Admin} />
			<Route path="/sorteio/cruzer-lt-turbo" component={CruzerLTTurbo} />
			<Route path="/sorteio/range-rover" component={RangeRover} />
			<Route path="/sorteio/lander-255-cc" component={Lander255CC} />
			<Route path="/cruzer-lt-turbo/cadastro/:number" component={CadastroCruzerLTTurbo} />
			<Route path="/range-rover/cadastro/:number" component={CadastroRangeRover} />
			<Route path="/lander-255-cc/cadastro/:number" component={CadastroLander255CC} />
		</Switch>
		);
}

export default Routes;