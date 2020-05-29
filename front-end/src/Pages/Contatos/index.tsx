import React from 'react';

import { Container } from './styles';

import Header from './../../Components/Header/';
import Footer from './../../Components/Footer/';

import { FaSmileWink } from 'react-icons/fa';
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';

const Contatos: React.FC = () => {
	return (
			<Container>
				<Header />
					<div className="contatos">
						<div className="enunciado">
							<h2>Entre em contato conosco para tirar suas dúvidas</h2>
						</div>	

						<div className="description">
							<p>Você pode entrar em contato conosco a partir dos meios de comunicação abaixo:</p>
						</div>

						<div className="links">
							<div className="buttons">
								<a className="whatsapp" href="https://api.whatsapp.com/send?phone=+5588998139342"><AiOutlineWhatsApp size={20}/> Whatsapp</a>
								<a className="instagram" href="https://www.instagram.com/cariririfas"><AiOutlineInstagram size={20}/> Instagram</a>
								<a className="email" href="mailto:levils114@gmail.com"><MdEmail size={20}/> E-mail</a>
							</div>	
						</div>

						
					</div>
				<Footer />
			</Container>
		);
}

export default Contatos;