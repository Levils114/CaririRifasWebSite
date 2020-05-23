import React from 'react';

import {Link} from 'react-router-dom';

import { FirstHeader, HeaderPrimary } from './styles';

import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineHome} from 'react-icons/ai';
import {MdEmail, MdAttachMoney} from 'react-icons/md';
import {BsBuilding} from 'react-icons/bs';
import {FiPhone} from 'react-icons/fi';
import {RiTrophyLine} from 'react-icons/ri';


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
					          
					          <p><AiOutlineHome size={22} />INÍCIO</p>
					        </Link>

					        <Link to="/empresa" className="hvr-underline-from-center">			          
					          <p><BsBuilding size={22} />EMPRESA</p>
					        </Link>

					        <Link to="/sorteios" className="hvr-underline-from-center">
					          <p><RiTrophyLine size={22} />SORTEIOS</p>
					        </Link>

					        <Link to="/como-pagar" className="hvr-underline-from-center">
					          <p><MdAttachMoney size={22} />COMO PAGAR</p>
					        </Link>

					        <Link to="/contatos" className="hvr-underline-from-center" id="lastLink">
					          <p><FiPhone size={22}/>CONTATOS</p>
					        </Link>

					        
					     </nav>
				     </header>
				</HeaderPrimary>
			</>
		);
}

export default Header;