import React from 'react'; 

import {Container} from './styles'; // importando a variável 'Container' de './styles.ts', que na verdade é uma div

interface TooltipProps{ // criando uma interface chamada 'TooltipProps' que recebe os parâmetros abaixo
	title: string; // diz que 'title' é uma string
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, ...rest }) => { // criando um component chamado 'Tooltip' que recebe como parâmetros 'title', 'children' e '...rest'. OBS: 'children' nada mais é do que o que a tag pode receber dentro dela e '...rest' nada mais que todo o resto
	return(
		<Container>
			{children}
			<span>{title}</span>
		</Container>
		);
}

export default Tooltip; // exportando o componente 'Tooltip'