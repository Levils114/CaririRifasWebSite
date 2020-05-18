import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
class User{

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar')
	name: string;

	@Column('varchar')
	sorteio: string;

	@Column('varchar')
	email: string;

	@Column('varchar')
	phone: number;

	@Column('varchar')
	rifa: number;

	@CreateDateColumn()
	created_at: Date;
}

export default User;

