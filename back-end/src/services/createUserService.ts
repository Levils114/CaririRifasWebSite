import User from './../models/Users'; // importando o modele 'User' de './src/models/User.ts'

import { getRepository } from 'typeorm'; // importando a funcionalidade 'getRepository' da biblioteca 'typeorm'

import AppError from './../errors/AppError'; // importando a classe 'AppError' de './src/errors/AppError.ts'

interface Resquest{ // criando uma tipagem chamada 'Request'que recebe as tipagens logo abaixo
	name: string; // diz que 'name' é uma string
	sorteio: string; // diz que 'sorteio' é uma string
	phone: number; // diz que 'phone' é um number
	rifa: number; // diz que 'rifa' é um number
	estado?: string; // diz que 'estado' é uma string. OBS: o ponto de interrogação antes de ':', significa que não é obrigatório a informção de 'estado'
}

class CreateUserService{ // criando a classe chamada 'CreateUserService'
	public async execute({ name, sorteio, phone, rifa, estado }: Resquest): Promise<User>{ // criando o método 'execute', onde esse método recebe como paramêtros 'name', 'sorteio', 'phone', 'rifa' e 'estado'
		const usersRepository = getRepository(User); // criando a variável 'usersRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados

		const checkRifaUse = await usersRepository.findOne({ // criando a variável 'checkRifaUse' e implementando dentro dela o método 'findOne', que serve para checar se o usuário que será criado, está usando uma rifa já utilizado em determinado sorteio
			where: {rifa, sorteio}
		});

		if (checkRifaUse){ // criando a condição para caso o 'checkRifaUse' seja encontrado
		 	throw new Error('Alguém já pegou essa rifa'); // pede para o método retornar um erro
		}

		const user = usersRepository.create({ name, sorteio, phone, rifa, estado }); // criando variável 'user' e utilzando o método 'create', que serve para criar dentro do banco de dados os usuário com 'name', 'sorteio', 'phone', 'rifa' e 'estado'

		await usersRepository.save(user); // salvando o usuário criado na variável 'user' dentro do banco de dados, à partir do método 'save'

		return user; // diz para o método retornar o usuário criado
	}
}

export default CreateUserService; // exporta a classe 'CreateUserService' para ser utilizada em './src/routes/users.routes.ts'