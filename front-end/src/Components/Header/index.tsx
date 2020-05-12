import React from 'react';

import {Link} from 'react-router-dom';

import { FirstHeader, HeaderPrimary } from './styles';

import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsPhone} from 'react-icons/bs'

import logoImg from './../../Assets/Menu/favicon.png'

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
						
						<button>
							<a href="mailto:levils114@gmail.com">		
								<MdEmail size={20}/>
							</a>	
						</button>

						<button className="lastButton">
							<a href="tel:+55(88)99813-9342">
								<BsPhone size={20}/>
							</a>	
						</button>
					</div>
				</FirstHeader>

				<HeaderPrimary>
					<header>
						<div>
							<img src={logoImg} alt="logo"/>
							<p>Cariri Rifas</p>
						</div>

						<nav>
					        <Link to="/" className="hvr-underline-from-center">
					          Menu
					        </Link>

					        <Link to="/sorteios" className="hvr-underline-from-center">
					          Sorteios
					        </Link>

					        <Link to="/como-pagar" className="hvr-underline-from-center">
					          Como Pagar
					        </Link>

					        <Link to="/filantropia-premiada" className="hvr-underline-from-center">
					          Filantropia
					        </Link>

					        <Link to="/contatos" className="hvr-underline-from-center">
					          Contatos
					        </Link>

					        
					     </nav>
				     </header>
				</HeaderPrimary>
			</>
		);
}

export default Header;