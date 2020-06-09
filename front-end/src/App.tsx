import React from 'react';  // importando React da biblioteca 'react' para poder usar jsx

import { BrowserRouter } from 'react-router-dom'; // importando a funcionalidade 'BrowserRouter' da biblioteca 'react-router-dom'
import GlobalStyle from './Styles/global'; // importando a estilização global

import Routes from './Routes'; // importando as rotas



function App() { // criando um componente chamado 'App'
  return (
    <>
    	
	 <BrowserRouter>
		<Routes />
	 </BrowserRouter>
	   

     <GlobalStyle />
    </> 
  );
}

export default App; // exportando o componente 'App'
