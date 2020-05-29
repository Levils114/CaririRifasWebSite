import React, { useState, useRef, useEffect} from 'react';

import api from './../../../../Service/api';

import { useRouteMatch, Link } from 'react-router-dom';

import {Container} from './styles';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';

import Header from './../../../../Components/Header/';
import Footer from './../../../../Components/Footer/';
import Input from './../../../../Components/Input/';


import {FiArrowLeft} from 'react-icons/fi';
import {IoMdPerson} from 'react-icons/io';
import {FaPhoneAlt} from 'react-icons/fa';
import {AiOutlineFieldNumber} from 'react-icons/ai';


import * as Yup from 'yup';
import getValidationErrors from './../../../../Utils/getValidationErrors';

interface NumberParams{
	number: string;
}

interface User{
	rifa: string;
	sorteio: string;
}

const CadastroCruzerLTTurbo: React.FC = () => {

	const {params} = useRouteMatch<NumberParams>();

	const formRef = useRef<FormHandles>(null);

	const [name, setName] = useState('');
	const sorteio = 'Cruzer LT Turbo';
	const [phone, setPhone] = useState('');
	const rifa = params.number;
	const [rifaUsed, setRifaUsed] = useState<User[]>([]);
	const [rifaAlreadyUsed, setRifaAlreadyUsed] = useState<User[]>([]);
	const rifaIndex = rifaUsed.findIndex(user => user.rifa === rifa && user.sorteio === sorteio);
	const sorteioIndex = rifaUsed.findIndex(user => user.sorteio === sorteio);

	async function handdleUserCadast(data: object){
		try{

			formRef.current?.setErrors({});

			const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

			const schema = Yup.object().shape({
				name: Yup.string().required('Nome Obrigatório'),
				phone: Yup.string().required('Telefone Obrigatório').matches(phoneRegExp, 'Número Inválido')
			});


			const data = {name, sorteio, phone, rifa};

			await schema.validate(data, {
				abortEarly: false
			});

			if (rifaIndex >= 0){
				setName('');
				setPhone('');
				return alert('Está rifa já está reservada');
					
			}

			const response = await api.post('/users', data);

			setName('');
			setPhone('');

			return alert('Seu Cadastro foi bem sucedido. Faça o pagamento em até 24 horas e nos envie o comprovante via Whatsapp.');
			
		} catch(err){
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}	

	}

	function handdleDeleteData(){
		setName('');
		setPhone('');

	}

	useEffect(() => {
		api.get('/users').then(response => {setRifaUsed(response.data)});		
	}, []);

	console.log(rifaIndex);


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
							<Form ref={formRef} onSubmit={handdleUserCadast}>

								<p>Nome Completo:</p>
								<Input icon={IoMdPerson} value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Escreva seu nome completo"/>

								<p>Telefone:</p>
								<Input icon={FaPhoneAlt} value={phone} onChange={e => setPhone(e.target.value)} name="phone" type="tel" placeholder="Escreva seu número"/>
							
								<p>Rifa:</p>
								<Input icon={AiOutlineFieldNumber} readOnly placeholder={`${params.number}`} name="rifa"/>

								<div className="buttons">
									<button type="reset" className="resetar" onClick={handdleDeleteData}>Cancelar</button>
									<button type="submit" className="enviar">Enviar</button>
								</div>

							</Form>
						</div>
					</div>	
				<div className="footer">	
					<Footer />
				</div>	
				
			</Container>
		);
}

export default CadastroCruzerLTTurbo;