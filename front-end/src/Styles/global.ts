import { createGlobalStyle } from 'styled-components'; // importando a funcionalidade 'createGlobalStyle' da biblioteca 'styled-components'


export default createGlobalStyle` ${/* exportando e criando uma estilização global */}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #262626 ;
		color: #d1d1d1;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Ubuntu', sans-serif;
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong{
		font-weight: 500;
	}

	button{
		cursor: pointer;
	}
`

