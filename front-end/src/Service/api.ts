import axios from 'axios'; // importando a biblioteca 'axios' para dentro de axios

const api = axios.create({ // criando uma variável chamada 'api' e implementando dentro dela o método 'create()', onde é criado a conexão com o banco de dados
	baseURL: "http://localhost:3333" // adicionando a 'baseURL' como 'localhost:3333', pois o servidor em desenvolvimento está rodando na própria máquina e na porta 3333
});

export default api; // exportando a variável 'api'