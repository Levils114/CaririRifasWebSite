import React from 'react';

import {Container} from './styles';

interface TooltipProps{
	title: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, ...rest }) => {
	return(
		<Container>
			{children}
			<span>{title}</span>
		</Container>
		);
}

export default Tooltip;