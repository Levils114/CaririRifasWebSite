import React from 'react';

import {Link} from 'react-router-dom';

import { Container } from './styles';

import Header from './../../Components/Header/';
import Footer from './../../Components/Footer/';

import { FaSmileWink } from 'react-icons/fa';
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail, MdPayment} from 'react-icons/md';
import {BsPhone, BsSearch, BsClock} from 'react-icons/bs';
import {FiCheckSquare} from 'react-icons/fi'

const Contatos: React.FC = () => {
	return (
			<Container>
				<Header />
					<div className="contatos">
						<div className="enunciado">
							<h2>Entre em contato conosco para tirar suas dúvidas </h2>
							<FaSmileWink size={20} />
						</div>	

						<div className="description">
							<p>Você pode entrar em contato conosco a partir dos meios de comunicação abaixo:</p>
						</div>

						<div className="links">
							<div className="buttons">
								<a className="whatsapp" href="https://api.whatsapp.com/send?phone=+5588998139342"><AiOutlineWhatsApp size={20}/> Whatsapp</a>
								<a className="instagram" href="https://www.instagram.com/cariririfas"><AiOutlineInstagram size={20}/> Instagram</a>
								<a className="email" href="mailto:levils114@gmail.com"><MdEmail size={20}/> E-mail</a>
								<a className="phone" href="tel:+55(88)99813-9342"><BsPhone size={20}/> Telefone</a>
							</div>	
						</div>

						<div className="etapas">
							<div className="explain">
								<div className="explainTitle">
									<BsSearch size={22}/>
									<h3>Escolha o Sorteio</h3>
								</div>	

								<div className="explainDescription">
									<p>O primeiro passo para participar de nossas rifas, é escolher o sorteio que você quer participar. Você pode fazer isso acessando a aba <Link to="/sorteios">Sorteios</Link>.</p>
								</div>
							</div>

							<div className="explain">
								<div className="explainTitle">
									<FiCheckSquare size={22}/>
									<h3>Escolha Seus Números</h3>
								</div>	

								<div className="explainDescription">	
									<p>Após escolher o sorteio que você participará, escolha os números que você quiser. Você pode escolher quantos números quiser. Quanto mais números escolher, mais chances de ganhar.</p>
								</div>	
							</div>

							<div className="explain">
								<div className="explainTitle">
									<MdPayment size={22}/>
									<h3>Efetue o Pagamento</h3>
								</div>
								
								<div className="explainDescription">	
									<p>Após escolher seus números, efetue o pagamento a partir dos nossos meios de pagamento acima e nos envie o comprovante via <a href="https://api.whatsapp.com/send?phone=+5588998139342">Whatsapp</a>.</p>
								</div>
							</div>

							<div className="explain">
								<div className="explainTitle">
									<BsClock size={22}/>
									<h3>Aguarde Dia do Sorteio</h3>
								</div>	

								<div className="explainDescription">
									<p>Após seu pagamento ser confirmado por nós, aguarde o dia do sorteio e venha conferir o resultado no site.</p>
								</div>
							</div>
						</div>
					</div>
				<Footer />
			</Container>
		);
}

export default Contatos;