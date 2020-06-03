import React from 'react';

import Header from './../../Components/Header/';
import Footer from './../../Components/Footer/';

import { Container } from './styles';

import {GiStairsGoal} from 'react-icons/gi';
import {BsEye, BsStar} from 'react-icons/bs';

const Empresa: React.FC = () => {
	return (
			<Container>
				<Header />
					<div className="aboutUs">

						<div className="title">
							<h1>Quem Somos</h1>
						</div>	

						<div className="aboutUsDescription">
							<div className="divToOrganize" id="firstModel">
								<p>A Cariri de Prêmios é uma empresa especializada na venda de cotas  de Ativos na Modalidade Filantropia Premiável, com atuação em todo o território nacional com sede na cidade de  Juazeiro do Norte, com inscrição no  (CNPJ nº xx.xxx.xxx/0001-xx).</p>
							</div>

							

							<div className="divToOrganize">
								<p>Além de concorrer a prêmios de Ativos, com a Cariri de Prêmios você pode contribuir para o desenvolvimento e custeio da CRIASA (instituição de apoio ao Idoso), através da distribuição de participação nos lucros, agregando recursos que serão investidos em assistência à saúde, assistência social e acolhimento aos idosos carentes.</p>
							</div>

							

							<div className="divToOrganize" >
								<p>Conheça mais sobre o trabalho e os projetos da Cariri de Prêmios no site: XXXXXXX</p>
							</div>

							
						</div>

						
					</div>

					<div className="company">

						<div className="titleCompany">
							<h1>Empresa</h1>
						</div>	

						<div className="companyContainer">
							<div className="model" id="firstModel">
								<div className="title">
									<GiStairsGoal size={24} />
									<span>Missão</span>
								</div>

								<div className="description">
									<p>Premiar pessoas para possibilitar a realização de sonhos e contribuir com assistência social através da filantropia.</p>
								</div>
							</div>	

							<div className="model">
								<div className="title">
									<BsEye size={24} />
									<span>Visão</span>
								</div>

								<div className="description">
									<p>Ser referência em venda de cotas de Ativos na Modalidade Filantropia Premiável  em todo o Brasil.</p>
								</div>
							</div>	

							<div className="model">
								<div className="title">
									<BsStar size={24} />
									<span>Valores</span>
								</div>

								<div className="description">
									<p>Ética<br/>Confiança<br />Transparência <br />Solidariedade <br />Resultados</p>
								</div>
							</div>	
						</div>
					</div>

				<Footer />
			</Container>
		);
};

export default Empresa;