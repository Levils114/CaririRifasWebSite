import {getRepository} from 'typeorm';
import User from './../models/Users';

import AppError from './../errors/AppError';

interface Request{
	id: string;
	estado: string;
}

class UpdateUserService{
	public async execute({id, estado}: Request): Promise<User>{
		const userRepository = getRepository(User);

		const user = await userRepository.findOne({where: {id}});

		if (!user){
			throw new AppError("This user don't exist", 401);
		};

		user.estado = estado;


		await userRepository.save(user);

		return user;

	}
	
}

export default UpdateUserService;