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
	phone: number;

	@Column('varchar')
	rifa: number;

	@Column('varchar')
	estado: string;

	@CreateDateColumn()
	created_at: Date;
}

export default User;

