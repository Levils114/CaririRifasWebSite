import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Menu from './../Pages/Menu/index.js';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Menu} />
		</Switch>
		);
}

export default Routes;