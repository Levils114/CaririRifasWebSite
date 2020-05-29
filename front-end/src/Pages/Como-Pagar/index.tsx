import React from 'react';

import { Container } from './styles';

import Header from './../../Components/Header/';
import Footer from './../../Components/Footer/';

import img1 from './../../Assets/Como-Pagar/bradesco.jpg';
import img2 from './../../Assets/Como-Pagar/sicredi.jpg';
import img3 from './../../Assets/Como-Pagar/caixa.jpg';
import img4 from './../../Assets/Como-Pagar/brasil.jpg';

const ComoPagar: React.FC = () => {
	return(
		<Container>
			<Header />

			<div className="title">
				<h2>CONTAS BANCÁRIAS QUE VOCÊ PODE FAZER O PAGAMENTO</h2>
			</div>

			<div className="contasBancarias">
				<div className="enunciado">
					<h3>Para participar das rifas, você <b>DEVE</b> fazer uma transferêcia bancária para uma dessas contas abaixo <br /> e nos comprovar via <a href="https://api.whatsapp.com/send?phone=+5588998139342">Whatsapp</a>.</h3>
				</div>

				<div className="divisor">
					<button></button>
				</div>

				<div className="dadosContainer">
					<div className="dados">
						<img src={img1} alt="img1"/>
						<p>Bradesco</p>
						<p>Titular: Alexandre A Tavares</p>
						<p>CPF: 016.310.343-75</p>
						<p>Agência: 0771</p>
						<p>Conta: 2466-2</p>
					</div>

					<div className="dados">
						<img src={img2} alt="img2"/>
						<p>Sicredi</p>
						<p>Titular: Alexandre A Tavares</p>
						<p>CPF: 016.310.343-75</p>
						<p>Agência: 0771</p>
						<p>Conta: 6263-4</p>
						
					</div>

					<div className="dados">
						<img src={img3} alt="img3"/>
						<p>Caixa</p>
						<p>Titular: Renato S Nepomuceno </p>
						<p>CPF: 108.177.904-70</p>
						<p>Agencia: 1668 </p>
						<p>Poupança: 36201-5</p>
						<p>Operação: 013</p>
						
					</div>

					<div className="dados">
						<img src={img4} alt="img4"/>
						<p>Banco do Brasil</p>
						<p>Titular: Renato S Nepomuceno</p>
						<p>CPF: 108.177.904-704</p>
						<p>Agência: 1026</p>
						<p>Conta: 13978-5</p>
						
					</div>
				</div>
			</div>
			

			<Footer />
		</Container>
		);
}

export default ComoPagar;