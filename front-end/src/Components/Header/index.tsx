import React, {useState} from 'react'; // importando 'React' e a funcionalidade 'useState' da biblioteca 'react'

import {Link} from 'react-router-dom'; // importando a funcionalidade 'Link' de 'react-router-dom'

import { FirstHeader, HeaderPrimary, NavBar } from './styles'; // importando de './styles' as variáveis 'FirstHeader', 'HeaderPrimary' e 'Navbar', que na verdade são 'div'

import Media from 'react-media'; // importando 'Media' da biblioteca 'react-media'

import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineHome} from 'react-icons/ai'; // da linha 9 até a 14 são importações de ícones
import {MdEmail, MdAttachMoney} from 'react-icons/md';
import {BsBuilding} from 'react-icons/bs';
import {FiPhone, FiMenu} from 'react-icons/fi';
import {RiTrophyLine} from 'react-icons/ri';
import {GiCancel} from 'react-icons/gi';

import logoImg from './../../Assets/Header/LOGO6teste.png'; // impotando a imagem da logo


const Header: React.FC = () => { // criando um componente para o cabeçalho do site, chamando de 'Header'

	const [isInMobileDevice, setIsInMobileDevice] = useState(false); // criando uma variável chamada 'isInMobileDevice' e outra chamada 'setIsInMobileDevice', e implementado o useState dentro delas. O que o useState vai fazer é adicionar valores a variável 'isInMobileDevice' à partir de 'setIsInMobileDevice', nesse caso, a variável inicia como 'false', pois o useState está com '(false)'

	function handdleMenuOption(){ // criando uma função para quando o usuário estiver no celular, ele poder chamar as opções de páginas, como 'Menu', 'Sorteios', 'Como Pagar' e etc
		setIsInMobileDevice(true); // aqui diz que quando essa função for chamada, a variável 'isInMobileDevice' irá mudar de 'false' (que é seu estágio inicial) para 'true'
	}

	function handdleCancelMenuOption(){ // criando uma função para fechar as opções de páginas e mostrar apenas a logo
		setIsInMobileDevice(false); // aqui diz que quando essa função for chamada, a variável 'isInMobileDevice' irá mudar de 'true' para 'false'
	}

	return (
			<>
				<FirstHeader>
					<div>
						
						<p>Filantropia Premiável Regulamentada na LEI FEDERAL Nº 13.019/14 ART. 84 B, 84</p>
					</div>

					<div>
						<button>
							<a href="https://api.whatsapp.com/send?phone=">
								<AiOutlineWhatsApp size={20}/>
							</a>	
						</button>

						<button>
							<a href="https://www.instagram.com/cariridepremios/">
								<AiOutlineInstagram size={20}/>
							</a>	
						</button>
						
						<button className="lastButton">
							<a href="mailto:">		
								<MdEmail size={20}/>
							</a>	
						</button>

					</div>
				</FirstHeader>

				{!isInMobileDevice && ( // aqui diz que quando a variável 'isInMobileDevice' estiver como 'false', mostre o que está escrito da linha 62 até a 107
					<HeaderPrimary>

						<header>
							<div>
								<Media query="(max-width: 600px)"> {/* aqui é criada uma media query para quando o usuário estiver em um dispositivo de até 600px de largura (no caso, em um celular), caso isso seja 'true', o código irá retornar o que está dentro de 'Media'  */}
									<button onClick={handdleMenuOption}> {/* é criado um botão para chamar a função 'handdleMenuOption' */}
										<FiMenu size={27} />
									</button>
								</Media>

								<img src={logoImg} alt="logo"/>
							</div>


							<Media query="(min-width: 600px)"> {/* aqui é criada uma media query para quando o usuário estiver em um dispositivo acima 600px de largura (no caso, em um desktop), caso isso seja 'true', o código irá retornar o que está dentro de 'Media'  */}

								
									<nav className="pages">
										<Link to="/" className="hvr-underline-from-center" id="firstLink">					          
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
								


						     </Media>
					     </header>
					</HeaderPrimary>
				)}	

				{isInMobileDevice && ( //aqui é criada uma condição para caso a variável 'isInMobileDevice' esteja como 'true', se isso for confirmado, o código irá reproduzir o que está na linha 110 até 139
							<>
								<NavBar>
									<button onClick={handdleCancelMenuOption}> {/* é criado um botão para acionar a função 'handdleCancelMenuOption', para fechar as opções e mudar o valor da variável 'isInMobileDevice' de 'true' para 'false' */}
										<GiCancel size={27} />
									</button>	

									<nav className="pages">
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
								</NavBar>
							</>	
						)}

			</>
		);
}

export default Header; // exportando o componente 'Header'