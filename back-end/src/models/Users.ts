import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users') // Criando conexão entre a classe embaixo e a tabela users, que está dentro de database/migations
class User{ // criando uma classe chamada User

	@PrimaryGeneratedColumn('uuid') // criando conexão entre a coluna primária 'id' de 'users', com o id logo abaixo e entre parênteses dizendo o tipo dela, no caso, uuid
	id: string; // tipando o id como string

	@Column('varchar') // criando a conexão entre a coluna name de users, com o name logo abaixo, e entre parênteses o tipo dela, no caso, varchar
	name: string; // tipando name como string

	@Column('varchar') // criando a conexão entre a coluna sorteio de users, com o sorteio logo abaixo, e entre parênteses o tipo dela, no caso, varchar
	sorteio: string; // tipando sorteio como string

	@Column('varchar') // criando a conexão entre a coluna phone de users, com o phone logo abaixo, e entre parênteses o tipo dela, no caso, varchar
	phone: number; // tipando phone como number
 
	@Column('varchar') // criando a conexão entre a coluna rifa de users, com a rifa logo abaixo, e entre parênteses o tipo dela, no caso, varchar
	rifa: number; // tipando rifa como number

	@Column('varchar') // criando a conexão entre a coluna estado de users, com o estado logo abaixo, e entre parênteses o tipo dela, no caso, varchar
	estado: string; // tipando estado como string

	@CreateDateColumn() // criando a conexão entre a coluna created_at de users, com o created_at logo abaixo, essa declaração não contém a tipagem da coluna, pois é uma CreateDateColumn, então isso já deixa entendido que a coluna é do tipo Date
	created_at: Date; // tipando created_at como Date
}

export default User; // exportando a classe User

