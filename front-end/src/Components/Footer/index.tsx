import React from 'react';

import { FooterPrimary } from './styles';



import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


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
					          <AiOutlineWhatsApp size={24}/>
					        </a>

					        <a href="https://www.instagram.com/cariririfas">
					          <AiOutlineInstagram size={24}/>
					        </a>

					        <a className="lastLink" href="mailto:levils114@gmail.com">
					          <MdEmail size={24}/>
					        </a>
					     </nav>
				     </header>
				</FooterPrimary>
			</>
		);
}

export default Footer;