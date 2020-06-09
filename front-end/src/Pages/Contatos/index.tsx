import React from 'react'; // importando React da biblioteca 'react' para poder usar jsx

import { Container } from './styles'; // importando a variável 'Container' de './styles.ts'

import Header from './../../Components/Header/'; // importando o componente de cabeçalho
import Footer from './../../Components/Footer/'; // importando o componente do rodapé

import { FaSmileWink } from 'react-icons/fa'; // importando ícones
import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'; // importando ícones
import {MdEmail} from 'react-icons/md'; // importando ícones

const Contatos: React.FC = () => { // criando um componente chamado 'Contatos'
	return (
			<Container>
				<Header />
					<div className="contatos"> {/* div onde vai todas as informações dos contatos */}
						<div className="enunciado">
							<h2>Entre em contato conosco para tirar suas dúvidas</h2>
						</div>	

						<div className="description">
							<p>Você pode entrar em contato conosco a partir dos meios de comunicação abaixo:</p>
						</div>

						<div className="links">
							<div className="buttons">
								<a className="whatsapp" href="https://api.whatsapp.com/send?phone="><AiOutlineWhatsApp size={20}/> Whatsapp</a>
								<a className="instagram" href="https://www.instagram.com/cariridepremios/"><AiOutlineInstagram size={20}/> Instagram</a>
								<a className="email" href="mailto:"><MdEmail size={20}/> E-mail</a>
							</div>	
						</div>

						
					</div>
				<Footer />
			</Container>
		);
}

export default Contatos; // exportando o componente 'Contatos'