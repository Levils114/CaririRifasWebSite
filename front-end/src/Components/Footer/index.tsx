import React from 'react';

import { FooterPrimary } from './styles';

import {Link} from 'react-router-dom';

import {AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {MdPayment} from 'react-icons/md';
import {BsSearch, BsClock} from 'react-icons/bs';
import {FiCheckSquare} from 'react-icons/fi';

import img1 from './../../Assets/Como-Pagar/bradesco.jpg';
import img2 from './../../Assets/Como-Pagar/sicredi.jpg';
import img3 from './../../Assets/Como-Pagar/caixa.jpg';
import img4 from './../../Assets/Como-Pagar/brasil.jpg';


const Footer: React.FC = () => {
	return (
			<>
				<FooterPrimary>
					<div className="etapas">
			     		
						    
							     

						<div className="explainBox">	
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
									<p>Após escolher o sorteio que você participará, escolha os números que você quiser. Você pode escolher quantos números desejar. Quanto mais números escolher, mais chances de ganhar.</p>
								</div>	
							</div>

							<div className="explain">
								<div className="explainTitle">
									<MdPayment size={22}/>
									<h3>Efetue o Pagamento</h3>
								</div>
										
								<div className="explainDescription">	
									<p>Após escolher seus números, efetue o pagamento a partir dos nossos meios de pagamento, que você pode encontrar na aba <Link to="/como-pagar">Como Pagar</Link>, e nos envie o comprovante via <a href="https://api.whatsapp.com/send?phone=+5588998139342">Whatsapp</a>.</p>
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

					<div className="formasDePagamento">
							<div className="formasDePagamentoTitle">	
								<h2>Opções de Pagamento</h2>
							</div>

							<div className="opcoes">
								<img src={img1} />
								<img src={img2} />
								<img src={img3} />
								<img src={img4} />
							</div>
						</div>	
			</div>

			<div className="realFooter">
				<div className="comments">
					<p>CNPJ: </p>
					<p>TODOS OS DIREITOS RESERVADOS © 2020</p>
				</div>

				<div className="links">
					<div className="box">
						<a href="https://api.whatsapp.com/send?phone=+5588998139342">
							<AiOutlineWhatsApp size={22} />
							<p>ENTRE NO NOSSO GRUPO DO WHATSAPP</p>
						</a>
					</div>

					<div className="box">
						<a href="https://www.instagram.com/cariririfas">
							<AiOutlineInstagram size={22} />
							<p>NOS ACOMPANHE NO INSTAGRAM</p>
						</a>
					</div>
				</div>
			</div>

		</FooterPrimary>
			</>
		);
}

export default Footer;