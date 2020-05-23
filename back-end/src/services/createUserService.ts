import User from './../models/Users';

import { getRepository } from 'typeorm';

import AppError from './../errors/AppError';

interface Resquest{
	name: string;
	sorteio: string;
	phone: number;
	rifa: number;
	estado?: string;
}

class CreateUserService{
	public async execute({ name, sorteio, phone, rifa, estado }: Resquest): Promise<User>{
		const usersRepository = getRepository(User);

		const checkRifaUse = await usersRepository.findOne({
			where: {rifa, sorteio}
		});

		if (checkRifaUse){
		 	throw new Error('Alguém já pegou essa rifa');
		}

		const user = usersRepository.create({ name, sorteio, phone, rifa, estado });

		await usersRepository.save(user);

		return user;
	}
}

export default CreateUserService;