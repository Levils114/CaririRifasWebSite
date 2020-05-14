import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Menu from './../Pages/Menu/index.js';
import Sorteios from './../Pages/Sorteios/Dashboard/index';
import ComoPagar from './../Pages/Como-Pagar/';
import Contatos from './../Pages/Contatos/';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Menu} />
			<Route path="/sorteios" component={Sorteios} />
			<Route path="/como-pagar" component={ComoPagar} />
			<Route path="/contatos" component={Contatos} />
		</Switch>
		);
}

export default Routes;