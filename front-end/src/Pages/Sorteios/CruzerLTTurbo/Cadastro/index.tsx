import React from 'react';

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

	console.log(params);

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
							<form>

								
								<input name="nome" value="Cruzer LT Turbo" type="hidden"/>

								<p>Nome Completo:</p>
								<input name="nome" />

								<p>E-mail:</p>
								<input name="email"/>

								<p>Telefone:</p>
								<input name="phone" type="tel" pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}"/>

								<p>Rifa:</p>
								<input readOnly value={`${params.number}`} />

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