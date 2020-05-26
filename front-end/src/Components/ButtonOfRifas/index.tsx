import React, { ButtonHTMLAttributes } from 'react';


import { Container, Pele } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	state?: string;
	number: string;
}

const ButtonOfRifas: React.FC<ButtonProps> = ({children, state, number, ...rest}) => {

	const pele = true;

	return (
			<Container {...rest}>
				<p>{number}</p>
				{children}

				{pele && (
					<Pele title="filme do pelé">
						
					</Pele>
				)}
			</Container>
		);
}

export default ButtonOfRifas;