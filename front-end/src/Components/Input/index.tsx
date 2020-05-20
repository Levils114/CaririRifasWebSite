import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container, Error } from './styles';

import {useField} from '@unform/core';

import {FiAlertCircle} from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {

	const {error} = useField(name);

	return(
		<Container isErrored={!!error}>
			{Icon && <Icon  size={20}/>}
			<input {...rest}/>

			{error && (
				<Error title={error}>
					<FiAlertCircle size={20} />
				</Error>
				)}
		</Container>
		);
}

export default Input;