import React from 'react';

import {Link} from 'react-router-dom';

import { FirstHeader, HeaderPrimary } from './styles';

import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


import logoImg from './../../Assets/Menu/logo2.png'

const Header: React.FC = () => {
	return (
			<>
				<FirstHeader>
					<div>
						
						<p>Filantropia Premiável Regulamentada na LEI FEDERAL Nº 13.019/14 ART. 84 B, 84</p>
					</div>

					<div>
						<button>
							<a href="https://api.whatsapp.com/send?phone=+5588998139342">
								<AiOutlineWhatsApp size={20}/>
							</a>	
						</button>

						<button>
							<a href="https://www.instagram.com/cariririfas">
								<AiOutlineInstagram size={20}/>
							</a>	
						</button>
						
						<button className="lastButton">
							<a href="mailto:levils114@gmail.com">		
								<MdEmail size={20}/>
							</a>	
						</button>

					</div>
				</FirstHeader>

				<HeaderPrimary>
					<header>
						<div>
							<img src={logoImg} alt="logo"/>
						</div>

						<nav>
					        <Link to="/" className="hvr-underline-from-center">
					          INÍCIO
					        </Link>

					        <Link to="/sorteios" className="hvr-underline-from-center">
					          SORTEIOS
					        </Link>

					        <Link to="/como-pagar" className="hvr-underline-from-center">
					          COMO PAGAR
					        </Link>

					        <Link to="/empresa" className="hvr-underline-from-center">
					          EMPRESA
					        </Link>

					        <Link to="/contatos" className="hvr-underline-from-center" id="lastLink">
					          CONTATOS
					        </Link>

					        
					     </nav>
				     </header>
				</HeaderPrimary>
			</>
		);
}

export default Header;