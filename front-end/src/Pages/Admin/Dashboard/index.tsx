import React, {useState, useEffect} from 'react';

import api from './../../../Service/api';

import { Container } from './styles';

import Header from './../../../Components/Header';
import Footer from './../../../Components/Footer';

interface Users{
	id: string;
	sorteio: string;
	name: string;
	phone: string;
	estado: string;
	created_at: string;
}

const Admin: React.FC = () => {

	const [users, setUsers] = useState<Users[]>([]);

	useEffect(() => {
		api.get('/users').then(response => setUsers(response.data));
	}, []);

	return (
		<Container>
			<Header />

				<div className="table">
					<table>
						<tr>
							<td>ID</td>
							<td>SORTEIO</td>
							<td>NOME</td>
							<td>TELEFONE</td>
							<td>ESTADO</td>
							<td>HORÁRIO DA RESERVA</td>
							<td>Editar</td>
							<td>Apagar</td>
						</tr>

						{users.map(user => (
							<tr>
								<td>{user.id}</td>
								<td>{user.sorteio}</td>
								<td>{user.name}</td>
								<td>{user.phone}</td>
								<td>{user.estado}</td>
								<td>{user.created_at}</td>
								<td><button>Editar</button></td>
								<td><button>Apagar</button></td>
							</tr>
							))}
					</table>
				</div>

			<Footer />
		</Container>	
		);
}

export default Admin;

