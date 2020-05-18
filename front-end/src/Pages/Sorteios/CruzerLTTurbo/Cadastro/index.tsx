import React, { useState, FormEvent } from 'react';

import api from './../../../../Service/api';

import { useRouteMatch, Link } from 'react-router-dom';

import {Container} from './styles';

import Header from './../../../../Components/Header/';
import Footer from './../../../../Components/Footer/';

import {FiArrowLeft} from 'react-icons/fi';

interface NumberParams{
	number: string;
}

const CadastroCruzerLTTurbo: React.FC = () => {

	const {params} = useRouteMatch<NumberParams>();

	const [name, setName] = useState('');
	const sorteio = 'Cruzer LT Turbo';
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const rifa = params.number;

	

	async function handdleUserCadast(event: FormEvent<HTMLFormElement>){
		try{
			event.preventDefault();

			const data = {name, sorteio, email, phone, rifa};

			const reponse = await api.post('/users', data);

			setName('');
			setEmail('');
			setPhone('');

			alert('Seu Cadastro foi bem sucedido. Aguarde o dia do sorteio.');
		} catch(err){
			alert(err.message);
		}	

	}

	return(
			<Container>
				<Header />
					<div className="formContainer">

						<div className="form">
							<div className="voltar">
								<Link to="/sorteio/cruzer-lt-turbo">
									<FiArrowLeft size={20}/>
									<p>Voltar</p>
								</Link>	
							</div>	
							<h1>Cadastro</h1>
							<form onSubmit={handdleUserCadast}>

								<p>Nome Completo:</p>
								<input value={name} onChange={e => setName(e.target.value)} name="nome" placeholder="Escreva seu nome completo"/>

								<p>E-mail:</p>
								<input value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="Escreva seu e-mail"/>

								<p>Telefone:</p>
								<input value={phone} onChange={e => setPhone(e.target.value)} name="phone" type="tel" placeholder="Ex: (xx) xxxxx-xxxx" />

								<p>Rifa:</p>
								<input readOnly placeholder={`${params.number}`} />

								<div className="buttons">
									<button type="reset" className="resetar">Cancelar</button>
									<button type="submit" className="enviar">Enviar</button>
								</div>

							</form>
						</div>
					</div>	
				<Footer />
			</Container>
		);
}

export default CadastroCruzerLTTurbo;