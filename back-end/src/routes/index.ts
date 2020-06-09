import {Router} from 'express'; // importando a função Router da biblioteca express

import userRouter from './users.routes'; // importando userRouter de ./src/routes/users.routes.ts

const routes = Router(); // criando uma viriável chamada routes e incluindo as funcionalidades de 'Router' para ela 

routes.use('/users', userRouter) // usando o método 'use' ena variável 'routes', para dizer para ela criar uma rota '/users' e consumir tudo de 'userRouter'


export default routes; // exportando a variável routes