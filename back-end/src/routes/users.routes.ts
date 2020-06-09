import {Router, Request, Response} from 'express'; // importando a função Router e as tipagens Request e Response da biblioteca express

import CreateUserService from './../services/createUserService'; // importando as regras de negócio para criação de um usuário de ./src/services/createUserService.ts
import UpdateUserService from './../services/updateUserService'; // importando as regras de negócio para atualização de um usuário de ./src/services/updateUserService.ts
import DeleteUserService from './../services/deleteUserService'; // importando as regras de negócio para remoção de um usuário de ./src/services/deleteUserService.ts

import {getRepository} from 'typeorm'; // importando a função 'getRepository' da biblioteca typeorm

import User from './../models/Users'; // importando o modelo User de './src/models/User.ts'

const userRouter = Router(); // criando uma variável chamada userRouter e colocando todas as funcionalidades de 'Router' dentro dessa variável

userRouter.post('/', async (request: Request, response: Response) => { // criando a funcionalide de criação de usuário
	try{ // aqui estou diznedo para o código tentar executar o seguinte escopo abaixo, e caso dê algum erro, caia no catch(err), que está logo abaixo do escopo
		const { name, sorteio, email, phone, rifa } = request.body; // criando um array de variáveis que serão necessárias para criação de um novo usuário e dizendo que todas fazem parte de um 'request.body', ou seja, é um requisição do parêmetro 'body', que no caso, é o parêmetro para criação de algo no banco de dados

		const createUser = new CreateUserService(); // criando uma variável chamada 'createUser' e implementando dessa variável as funcionaldidades de 'createUserService'

		const user = await createUser.execute({ name, sorteio, phone, rifa, estado: "reservado" }); // criando uma variável chamada user, que no caso, será o usuário, e chamando para essa variável o método 'execute' de 'createUser', criando assim um usuário. OBS: não tem o id, nem created_at, pois eles já são estabelecidos em './src/database/migrations/', onde os metódos 'default', já estão configurados. Estado também é configurado para começar como 'reservado', pois quando um cliente é cadastrado, automaticamente ele já reserva a rifa que foi da escolha dele

		return response.json(user); // pede para o a função retornar em formato json o usuário criado
	} catch(err){ // caso o escopo acima não consiga ser executado, cairá nesse 'catch(err)'
		return response.json({ Error: err.message }) // pede para a função retornar em formato json o erro que foi encontrado
	}
		

});

userRouter.get('/', async (request: Request, response: Response) => { // criando a funcionalidade de listagem de usuários
	const userRepository = getRepository(User); // criando a variável 'userRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados
	const user = await userRepository.find(); // criando a variável 'user' e implementando dentro dela o método 'find()', que encontra todos os usuários cadastrados no banco de dados

	
	return response.json(user); // pede para função retornar em formato json os usuários encontrados

});

userRouter.get('/:phone', async (request: Request, response: Response) => { // criando a funcionalidade de listagem de usuários à partir do telefone

		const {phone} = request.params; // criando a variável 'phone' e implementando dentro dela o método 'params' que serve para filtrar dados do banco de dados

		const userRepository = getRepository(User); // criando a variável 'userRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados
		const userByPhone = await userRepository.find({where: {phone: phone}}); // criando a variável 'userByPhone' e implementrando dentro dela a funcionalidade 'find()' com algumas regras, nesse caso, a regra é que o comando encontre um usuário em que o telefone dele seja igual ao telefone informado na rota

		if (!userByPhone){ // criando a condição para caso não encotre nenhum telefone cadastrado como o informado
			throw new Error('Esse número não está cadastrado'); // caso essa condição seja executada, é criado um novo erro dizendo que o número não está cadastrado
			
		}

		return response.json(userByPhone); // diz para função retornar em formato json o usuário encontrado com esse telefone

});

userRouter.put('/:id', async (request: Request, response: Response) => { // criando a funcionalidade de edição do usuário à partir do id informado
	try{ // aqui estou diznedo para o código tentar executar o seguinte escopo abaixo, e caso dê algum erro, caia no catch(err), que está logo abaixo do escopo
		const {id} = request.params; // cria a variável 'id' e implementa dentro dela o método 'params' que serve para filtrar dados do banco de dados

		const userRepository = getRepository(User); // criando a variável 'userRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados

		const updateUser = new UpdateUserService(); // criando a variável 'updateUser' e implementando dentro dela as funcionaldidades de 'UpdateUserService'

		const user = await updateUser.execute({id, estado: 'pago'}); // criando a variável 'user' e implementando dentro dela o método 'execute', atualizando id informando, e mudando o estado do usuário de 'reservado' para 'pago', essa funcionaldade serve para ser chamada quando um usuário novo se cadastrar

		return response.json(user); // diz para função retornar em formato json o usuário editado
	} catch(err){ // caso o escopo acima não consiga ser executado, cairá nesse 'catch(err)'
		return response.json({Error: err.message}); // pede para a função retornar em formato json o erro que foi encontrado
	}
});

userRouter.delete('/:id', async (request: Request, response: Response) => { // criando a funcionalidade de deletar o usuário à partir do id informado
	try{ // aqui estou diznedo para o código tentar executar o seguinte escopo abaixo, e caso dê algum erro, caia no catch(err), que está logo abaixo do escopo
		const {id} = request.params; // cria a variável 'id' e implementa dentro dela o método 'params' que serve para filtrar dados do banco de dados

		const userRepository = getRepository(User); // criando a variável 'userRepository' e implementando dentro dela a funcionalidade 'getRepository', que pega tudo que está no model 'User', tendo acesso aos usuários cadastrados nesse model no banco de dados

		const deleteUser = new DeleteUserService(); // criando a variável 'deleteUser' e implementando dentro dela as funcionaldidades de 'DeleteUserService'

		const user = await deleteUser.execute({id}); // criando a variável 'user' e implementando dentro dela o método 'execute', informando o id que do usuário que deverá ser removido do banco de dados

		return response.json({message: 'user was deleted'}); // diz para a função retornar uma mensagem de confirmação, caso o usuário seja deletado
	} catch(err){ // caso o escopo acima não consiga ser executado, cairá nesse 'catch(err)'
		return response.json({Error: err.message}); // diz para a função retornar uma mensagem, dizendo o erro encontrado
	}	
})


export default userRouter; // exportando a variável 'userRouter'