import User from './../models/Users';

import { getRepository } from 'typeorm';

import AppError from './../errors/AppError';

interface Resquest{
	name: string;
	sorteio: string;
	email: string;
	phone: number;
	rifa: number;
}

class CreateUserService{
	public async execute({ name, sorteio, email, phone, rifa }: Resquest): Promise<User>{
		const usersRepository = getRepository(User);

		const checkRifaUse = await usersRepository.findOne({
			where: {rifa}
		});

		if (checkRifaUse){
		 	throw new Error('Alguém já pegou essa rifa');
		}

		const user = usersRepository.create({ name, sorteio, email, phone, rifa });

		await usersRepository.save(user);

		return user;
	}
}

export default CreateUserService;