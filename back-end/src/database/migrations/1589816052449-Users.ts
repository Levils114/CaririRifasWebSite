import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Users1589816052449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.createTable(
    			new Table({
    				name: "users",
    				columns:[
    				{
    					name: "id", 
    					type: "varchar",
    					isPrimary: true,
    					generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',

    				},
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
    				{
    					name: "sorteio",
    					type: "varchar",
    					isNullable: false,
    				},
    				{
    					name: "phone",
    					type: "varchar",
    					isNullable: false,
    				},
    				{
    					name: "rifa",
    					type: "varchar",
    					isNullable: false,
    				},
                    {
                        name: "estado",
                        type: "varchar",
                        isNullable: false,
                    },
    				{
    					name: "created_at",
    					type: "timestamp",
    					default: "now()",
    					isNullable: false,
    				}
    				]
    			})
    		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.dropTable('users');
    }

}
