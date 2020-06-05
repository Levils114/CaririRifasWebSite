import {Router, Request, Response} from 'express';

import CreateUserService from './../services/createUserService';
import UpdateUserService from './../services/updateUserService';
import DeleteUserService from './../services/deleteUserService';

import {getRepository} from 'typeorm';

import User from './../models/Users';

const userRouter = Router();

userRouter.post('/', async (request: Request, response: Response) => {
	try{
		const { name, sorteio, email, phone, rifa } = request.body;

		const createUser = new CreateUserService();

		const user = await createUser.execute({ name, sorteio, phone, rifa, estado: "reservado" });

		return response.json(user);
	} catch(err){
		return response.json({ Error: err.message })
	}
		

});

userRouter.get('/', async (request: Request, response: Response) => {
	const userRepository = getRepository(User);
	const user = await userRepository.find();

	
	return response.json(user);

});

userRouter.get('/:phone', async (request: Request, response: Response) => {

		const {phone} = request.params;

		const userRepository = getRepository(User);
		const userByPhone = await userRepository.find({where: {phone: phone}});

		if (!userRepository){
			throw new Error('Esse número não está cadastrado');
			
		}

		return response.json(userByPhone);

});

userRouter.put('/:id', async (request: Request, response: Response) => {
	try{
		const {id} = request.params;

		const userRepository = getRepository(User);

		const updateUser = new UpdateUserService();

		const user = await updateUser.execute({id, estado: 'pago'});

		return response.json(user);
	} catch(err){
		return response.json({Error: err.message});
	}
});

userRouter.delete('/:id', async (request: Request, response: Response) => {
	try{
		const {id} = request.params;

		const userRepository = getRepository(User);

		const deleteUser = new DeleteUserService();

		const user = await deleteUser.execute({id});

		return response.json({message: 'user was deleted'});
	} catch(err){
		return response.json({Error: err.message});
	}	
})


export default userRouter;