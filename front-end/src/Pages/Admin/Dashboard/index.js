import React, {useEffect, useState} from 'react';

import api from './../../../Service/api';

import { Container } from './styles';

import Header from './../../../Components/Header/';
import Footer from './../../../Components/Footer/';



const DashboardAdmin = () => {

	const [users, setUsers] = useState([]);
	const [id, setId] = useState('');


	async function handdleEditEstado(){
		await api.put(`/users/${id}`);
	}

	useEffect(() => {
		api.get('/users').then(response => setUsers(response.data));
	}, []);

	console.log(id);

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

					{users.map(user => (
						<tr>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.sorteio}</td>
							<td>{user.phone}</td>
							<td>{user.rifa}</td>
							<td>{user.estado}</td>
							<td>{user.created_at}</td>
							<td>
								<form onSubmit={handdleEditEstado}>
									<input value={user.id} onClick={e => setId(e.target.value)}/>
									<button type="submit">PAGOU</button>
								</form>
							</td>
							<td><button>REMOVER</button></td>
						</tr>
						))}
				</table>
			<Footer />
		</Container>
		);
};

export default DashboardAdmin;