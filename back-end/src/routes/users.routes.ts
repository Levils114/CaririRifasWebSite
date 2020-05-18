import {Router, Request, Response} from 'express';

import CreateUserService from './../services/createUserService';

const userRouter = Router();

userRouter.post('/', async (request: Request, response: Response) => {
	try{
		const { name, sorteio, email, phone, rifa } = request.body;

		const createUser = new CreateUserService();

		const user = await createUser.execute({ name, sorteio, email, phone, rifa });

		return response.json(user);
	} catch(err){
		return response.json({ Error: err.message })
	}
		
});


export default userRouter;