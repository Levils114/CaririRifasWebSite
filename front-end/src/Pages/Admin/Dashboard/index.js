import React, {useEffect, useState} from 'react'; // importando 'React' e as funcionalidades 'useState' e 'useEffect' da biblioteca 'react'

import api from './../../../Service/api'; // importando a variável 'api', no caso, a variável que faz conexão com o banco de dados

import { Container } from './styles'; // importando a variável 'Container' de './styles.ts'

import Header from './../../../Components/Header/'; // importando o componente de cabeçalho
import Footer from './../../../Components/Footer/'; // importando o componente do rodapé



const DashboardAdmin = () => { // criando um componente chamado 'DashboardAdmin'

	const [users, setUsers] = useState([]); // criando uma variável chamada 'users' e outra chamada 'setUsers', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'users' à partir de 'setUsers', nesse caso, a variável inicia com um array vazio

	useEffect(() => { // aqui é utilizado o 'useEffect' para chamar o backend da aplicação
		api.get('/users').then(response => setUsers(response.data)); // aqui lista todos os usuários achados no banco de dados e os armazena na variável 'users'
	}, []);


	return(
		<Container>
			<Header />
				<table>
					<tr>
						<td>ID</td>
						<td>NOME</td>
						<td>SORTEIO</td>
						<td>TELEFONE</td>
						<td>RIFA</td>
						<td>ESTADO</td>
						<td>DATA</td>
						<td>PAGO</td>
						<td>REMOVER</td>
					</tr>

					{users.map(user => ( // cria um mapeamento da array 'users', e para cada 'user' encontrado, execute os comandos abaixo
						<tr>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.sorteio}</td>
							<td>{user.phone}</td>
							<td>{user.rifa}</td>
							<td>{user.estado}</td>
							<td>{user.created_at}</td>
							<td><button type="submit">PAGOU</button></td>
							<td><button>REMOVER</button></td>
						</tr>
						))}
				</table>
			<Footer />
		</Container>
		);
};

export default DashboardAdmin; // exportando o componente 'DashboardAdmin'