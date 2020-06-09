import React, { InputHTMLAttributes } from 'react'; // impotando 'React' e os atributos de input com 'InputHTMLAttributes' da biblioteca 'react'

import { IconBaseProps } from 'react-icons'; // importando a interface 'IconBaseProps' da biblioteca 'react-icons'

import { Container, Error } from './styles'; // importando as variáveis de estilo de './styles.ts'

import {useField} from '@unform/core'; // importando a funcionalidade 'useField' da biblioteca '@unform/core'

import {FiAlertCircle} from 'react-icons/fi'; // importando ícone

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{ // criando uma tipagem chamda 'InputProps' que recebe os parâmetros abaixo
	name: string; // diz que 'name' é uma string
	icon?: React.ComponentType<IconBaseProps>; // diz que 'icon' não é obrigatório e é um 'IconBaseProps'
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => { // criando um component chamado 'Input' que recebe como parãmetros 'name', 'icon' e '...rest'. OBS: '...rest' nada mais é que todo o resto 

	const {error} = useField(name); // criando uma variável 'error' e implementando o 'useField' nessa variável

	return(
		<Container isErrored={!!error}> {/* iniciando uma tag 'Container' (que é uma div), com um parêmetro 'isErrored' que recebe como valor 'error' em forma de booleano, por isso o '!!' antes do 'error', isso vai servir para estilizar o input caso tenha um erro, para queas bordas fiquem vermelhas, isso pode ser melhor visto em './styles.ts' */}
			{Icon && <Icon  size={20}/>}
			<input {...rest}/>

			{error && ( // criando uma condicional para caso tenha um 'error', o código vai executar o que está na linha 26 até a 29
				<Error title={error}>
					<FiAlertCircle size={20} />
				</Error>
				)}
		</Container>
		);
}

export default Input; // exportando o componente 'Input'