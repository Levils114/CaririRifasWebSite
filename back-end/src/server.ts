import express from 'express';

import './database/';

import routes from './routes';

import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
	console.log('Server is runnig in the 3333 port')
})