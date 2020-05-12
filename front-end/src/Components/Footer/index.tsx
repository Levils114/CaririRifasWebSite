import React from 'react';



import { FooterPrimary } from './styles';

import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsPhone} from 'react-icons/bs'

const Footer: React.FC = () => {
	return (
			<>
				<FooterPrimary>
					<header>
						<div>
							<p>CNPJ: xx.xxx.xxx/xxxx-xx</p>
							<p>Copyrights © 2020 Todos os direitos reservados.</p>
						</div>

						<nav>
					        <a href="https://api.whatsapp.com/send?phone=+5588998139342">
					          <AiOutlineWhatsApp size={20}/>
					        </a>

					        <a href="https://www.instagram.com/cariririfas">
					          <AiOutlineInstagram size={20}/>
					        </a>

					        <a href="mailto:levils114@gmail.com">
					          <MdEmail size={20}/>
					        </a>

					        <a href="tel:+55(88)99813-9342">
					          <BsPhone size={20}/>
					        </a>
					     </nav>
				     </header>
				</FooterPrimary>
			</>
		);
}

export default Footer;