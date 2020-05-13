import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Menu from './../Pages/Menu/index.js';
import Sorteios from './../Pages/Sorteios/Dashboard/index';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Menu} />
			<Route path="/sorteios" component={Sorteios} />
		</Switch>
		);
}

export default Routes;