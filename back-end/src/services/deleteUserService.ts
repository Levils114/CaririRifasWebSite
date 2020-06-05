import {getRepository} from 'typeorm';

import User from './../models/Users';

import AppError from './../errors/AppError';

interface Request{
	id: string;
}

class DeleteUserService{
	public async execute({id}: Request): Promise<void>{
		const userRepository = getRepository(User);

		const user = await userRepository.findOne({where: {id}});

		if (!user){
			throw new AppError("User don't exist");	
		}

		userRepository.remove(user);
	}
};

export default DeleteUserService;