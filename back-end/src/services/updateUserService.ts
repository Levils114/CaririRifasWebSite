import {getRepository} from 'typeorm'; // importando a funcionalidade 'getRepository' da biblioteca 'typeorm'
import User from './../models/Users'; // importando o modele 'User' de './src/models/User.ts'

import AppError from './../errors/AppError'; // importando a classe 'AppError' de './src/errors/AppError.ts'

interface Request{ // criando uma tipagem chamada 'Request' que recebe o parêmetro abaixo
	id: string; // diz que 'id' é uma string
	estado: string; // diz que 'estado' é uma string
}

class UpdateUserService{ // criando uma classe chamada 'UpdateUserService'
	public async execute({id, estado}: Request): Promise<User>{ // criando o método 'execute' que recebe como parêmetro o 'id' e o 'estado'
		const userRepository = getRepository(User); // criando a variável 'usersRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados

		const user = await userRepository.findOne({where: {id}}); // criando uma variável chamada 'user' e implementando o método 'findOne' para encontrar dentro do banco de dados, algum usuário com o id igual ao id informado

		if (!user){ // criando uma condição para caso esse usuário não seja encontrado
			throw new AppError("This user don't exist", 401); // diz para condição retornar um erro
		};

		user.estado = estado; // informa que o 'estado' dentro de 'user', no caso,'user.estado' será à partir de agora o estado informado na edição


		await userRepository.save(user); // diz para o banco de dados salvar o usuário editado

		return user; // diz para o método retornar a variável 'user'

	}
	
}

export default UpdateUserService; // exportando a classe 'UpdateUserService'