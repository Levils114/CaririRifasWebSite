import React, { useState, useRef, useEffect} from 'react'; // importando 'React' e as funcionalidades 'useState', 'useEffect' e 'useRef' da biblioteca 'react'

import api from './../../../../Service/api'; // importando a variável 'api', no caso, a variável que faz conexão com o banco de dados

import { useRouteMatch, Link } from 'react-router-dom'; // importando as funcionalidades 'Link' e 'useRouteMatch' da biblioteca 'react-router-dom'

import {Container} from './styles'; // importando a variável 'Container' de './styles.ts'

import {Form} from '@unform/web'; // importando o componente 'Form' da biblioteca '@unform/web'
import {FormHandles} from '@unform/core'; // importando a interface 'FormHandles' da biblioteca '@unform/core'

import Header from './../../../../Components/Header/';  // importando o componente de cabeçalho
import Footer from './../../../../Components/Footer/'; // importando o componente do rodapé
import Input from './../../../../Components/Input/'; // importando o componente do input


import {FiArrowLeft} from 'react-icons/fi'; // importando ícones
import {IoMdPerson} from 'react-icons/io'; // importando ícones
import {FaPhoneAlt} from 'react-icons/fa'; // importando ícones
import {AiOutlineFieldNumber} from 'react-icons/ai'; // importando ícones


import * as Yup from 'yup'; // importando tudo da biblioteca 'yup' como 'Yup'
import getValidationErrors from './../../../../Utils/getValidationErrors'; // importando a função 'getValidationErrors'

interface NumberParams{ // criando uma interface chamada 'NumberParams' que recebe os parêmtros abaixo
	number: string; // diz que 'number' é uma string
} 

interface User{ // criando uma interface chamada 'User' que recebe os parâmetros abaixo
	rifa: string; // diz que 'rifa' é uma string
	sorteio: string; // diz que 'sorteio' é uma string
}

const CadastroCruzerLTTurbo: React.FC = () => { // criando um componente chamado 'CadastroCruzerLTTurbo'

	const {params} = useRouteMatch<NumberParams>(); // criando uma variável chamada 'params' que extrai o número da rifa em que será feito o cadastro

	const formRef = useRef<FormHandles>(null); // criando uma variável 'formRef' que é implementado 'useRef', fazendo assim a conexão entre o 'Form' e essa variável. É uma espécie de 'document.querySelector()' 
	const [name, setName] = useState(''); // criando uma variável chamada 'name' e outra chamada 'setName', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'name' à partir de 'setName', nesse caso, a variável inicia com uma string vazia
	const sorteio = 'Cruzer LT Turbo'; // criando uma variável chamada 'sorteio' que recebe o nome do sorteio que está sendo feito o cadastro, no caso, 'Cruzer LT Turbo'. OBS: esse nome tem que ser OBRIGATORIAMENTE igual ao que é mostrado na tela de escolha de rifas na linha 32
	const [phone, setPhone] = useState(''); // criando uma variável chamada 'phone' e outra chamada 'setPhone', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'phone' à partir de 'setPhone', nesse caso, a variável inicia com uma string vazia
	const rifa = params.number; // criando uma variável chamada 'rifa' onde essa variável recebe o número da rifa que está sendo feito o cadastro
	const [rifaUsed, setRifaUsed] = useState<User[]>([]); // criando uma variável chamada 'rifaUsed' e outra chamada 'setRifaUsed', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'rifaUsed' à partir de 'setRifaUsed', nesse caso, a variável inicia com um array vazio
	const rifaIndex = rifaUsed.findIndex(user => user.rifa === rifa && user.sorteio === sorteio); // criando uma variável chamada 'rifaIndex', onde é feita a verificação se a rifa que está sendo cadastrada já existe no banco de dados, caso não, essa variável receberá como valor um número negativo, caso seja encontrado algo, essa variável pode receber valores à partir de 0 pra cima

	async function handdleUserCadast(data: object){ //criando uma função chamada 'handdleUserCadast' que recebe como parâmetro 'data', que é um objeto contendo as informações necessárias para o cadastro do usuário
		try{ 

			formRef.current?.setErrors({}); 

			const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; // criando um modelo para telefones

			const schema = Yup.object().shape({ // criando validação de dados informados pelo usuário
				name: Yup.string().required('Nome Obrigatório'), // diz que o nome é obrigatório, e caso não seja preenchido, retorne a mensagem 'Nome Obrigatório'
				phone: Yup.string().required('Telefone Obrigatório').matches(phoneRegExp, 'Número Inválido') // diz que o telefone é obrigatório e que o número precisa ser correspondente com 'phoneRegExp'
			});


			const data = {name, sorteio, phone, rifa}; // criando uma variável 'data', onde essa variável recebe todos os dados para cadastro do usuário, como nome, telefone, rifa e o sorteio

			await schema.validate(data, { // validando se os dados correspondem com o que foi estabelicido nas linhas 54, 55, 56, 57
				abortEarly: false
			});

			if (rifaIndex >= 0){ // criando uma condicional para caso a rifa cadastrada já esteja em uso
				setName('');
				setPhone('');
				return alert('Está rifa já está reservada'); // caso a rifa já esteja reservada, o site retornará um alert informando isso ao usuário
					
			}

			const response = await api.post('/users', data); // caso os dados passem por todas as validações, então ele é cadastrado à partir do método http 'post'

			setName(''); // diz para o valor da variável 'name' resetar para uma string vazia
			setPhone(''); // diz para o valor da variável 'phone' resetar para uma string vazia

			return alert('Seu Cadastro foi bem sucedido. Faça o pagamento em até 24 horas e nos envie o comprovante via Whatsapp.'); // diz para o código retornar um alert com a seguinte mensagem para o usuário
			
		} catch(err){ // caso seja encontrado algum erro, o código cairá nesse 'catch(err)'
			const errors = getValidationErrors(err); // criando uma variável 'error' que implementa a função 'getValidationErrors', que serve para valdar o erro
			formRef.current?.setErrors(errors);
		}	

	}

	function handdleDeleteData(){ // criando uma função para deletar os dados colocados pelo usuário, caso ele queira cancelar seu cadastro
		setName(''); // diz para o valor da variável 'name' resetar para uma string vazia
		setPhone(''); // diz para o valor da variável 'phone' resetar para uma string vazia

	}

	useEffect(() => { // aqui é utilizado o 'useEffect' para chamar o backend da aplicação
		api.get('/users').then(response => {setRifaUsed(response.data)}); // aqui lista todos os usuários achados no banco de dados e os armazena na variável 'rifaUsed'
	}, []);



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
								<Input icon={IoMdPerson} value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Escreva seu nome completo"/> {/* aqui é declarado um input com o valor inicial de 'name', e quando ele mudar, à partir do setName, o valor da variável 'name' receberá o que está nesse input */}

								<p>Telefone:</p>
								<Input icon={FaPhoneAlt} value={phone} onChange={e => setPhone(e.target.value)} name="phone" type="tel" placeholder="Escreva seu número"/> {/* aqui é declarado um input com o valor inicial de 'phone', e quando ele mudar, à partir do setPhone, o valor da variável'phone receberá o que está nesse input */}
							
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

export default CadastroCruzerLTTurbo; // exportando o componente CadastroCruzerLTTurbo