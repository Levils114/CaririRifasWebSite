import {Router, Request, Response} from 'express';

import CreateUserService from './../services/createUserService';

import {getRepository} from 'typeorm';

import User from './../models/Users';

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

userRouter.get('/', async (request: Request, response: Response) => {
	const userRepository = getRepository(User);
	const user = await userRepository.find();

	return response.json(user);

})


export default userRouter;