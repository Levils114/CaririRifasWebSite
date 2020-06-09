import {getRepository} from 'typeorm'; // importando a funcionalidade 'getRepository' da biblioteca 'typeorm'

import User from './../models/Users'; // importando o modele 'User' de './src/models/User.ts'

import AppError from './../errors/AppError'; // importando a classe 'AppError' de './src/errors/AppError.ts'

interface Request{ // criando uma tipagem chamada 'Request' que recebe o parêmetro abaixo
	id: string; // diz que 'id' é uma string
}

class DeleteUserService{ // criando uma classe chamda 'DeleteUserService'
	public async execute({id}: Request): Promise<void>{ // criando o método 'execute' que recebe como parêmetro o 'id'
		const userRepository = getRepository(User); // criando a variável 'usersRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados

		const user = await userRepository.findOne({where: {id}}); // criando uma variável 'user' e implementando dentro dela o método 'findOne' que serve para analisar se o id informado é encontrado dentro do banco de dados como o id de algum usuário

		if (!user){ // criando uma condição para caso não encontre o um usuário com o 'id' informado
			throw new AppError("User don't exist");	// diz para condição retornar um erro
		}

		userRepository.remove(user); // caso o usuário seja encontrado, ele será removido à partir do método 'remove'
	}
};

export default DeleteUserService; // exportando a classe 'DeleteUserService'