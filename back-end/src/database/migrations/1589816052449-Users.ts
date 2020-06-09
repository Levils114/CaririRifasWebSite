import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Users1589816052449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.createTable( //criação da tabela
    			new Table({ //criação da tabela
    				name: "users", //nomeando a tabela como users
    				columns:[ // criação das colunas da tabela
    				{
    					name: "id", // primeira coluna chamada id
    					type: "varchar", // tipo dela é varchar
    					isPrimary: true, // dizendo que ela é primária
    					generationStrategy: 'uuid', // dizendo para o código utilizar a biblioteca uuidv4 para nomear o id, para sempre gerar um id aleatório e de difícil acesso para possíveis ataques de hackers, um exeplo de uuidv4 é '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'
                        default: 'uuid_generate_v4()', // dizendo para o código que quando essa coluna for chamada, gere o comando 'uuid-generate_v4()', no caso, gerando a hash do id

    				},
                    {
                        name: "name", // segunda coluna chamada name
                        type: "varchar", // tipe dela varchar
                        isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
                    },
    				{
    					name: "sorteio", // terceira coluna chamada sorteio
    					type: "varchar", // tipo dela é varchar
    					isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
    				},
    				{
    					name: "phone", // quarta coluna chamada phone
    					type: "varchar", // tipo dela é varchar
    					isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
    				},
    				{
    					name: "rifa", // quinta coluna chamada rifa
    					type: "varchar", // tipo dela é varchar
    					isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
    				},
                    {
                        name: "estado", // sexta coluna chamada estado
                        type: "varchar", // tipo dela é varchar
                        isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
                    },
    				{
    					name: "created_at", // sétima coluna chamada created_at
    					type: "timestamp", // tipo dela é timestamp
    					default: "now()", // dizendo para o código que quando essa coluna for chamada, rode o comanda 'now()', gerando assim uma string com o dia e horário em que essa coluna foi acionada
    					isNullable: false, // dizendo para o código que ela não pode ser nula, ou seja, obrigatoriamente tem que ser preenchida
    				}
    				]
    			})
    		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.dropTable('users'); //apagando a coluna 
    }

}
