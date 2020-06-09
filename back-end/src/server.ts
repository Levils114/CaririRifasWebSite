import express from 'express'; // importa todas a funcionalidades como 'express' da biblioteca 'express'

import './database/'; // importando a conexão criada com o banco de dados em './src/database/index.ts'

import routes from './routes'; // importando a variável 'routes' de './src/routes/index.ts'

import cors from 'cors'; // importando como 'cors', todas as funcionalidades da biblioteca 'cors'

const app = express(); // criando a variável 'app' e implementando dentro dela todas as funcionalidades de 'express'

app.use(cors()); // falando para o código que a variável 'app' irá usar o 'cors'

app.use(express.json()); // falando para o código que a variável 'app' irá responder os returns em formato json

app.use(routes); // falando para o código que a variável 'app' irá usar as rotas utilizadas em 'routes' em './src/routes/index.ts'

app.listen(3333, () => { // diz para o código que quando o servidor for acionado, ele rodará na porta 3333
	console.log('Server is runnig in the 3333 port') // diz para o código retornar uma mensagem para quando o servidor estiver em execução
})