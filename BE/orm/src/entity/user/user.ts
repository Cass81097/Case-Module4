import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    username: string;
    @Column({type: 'varchar', length: 255})
    password: string;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'int'})
    age: number;
    @Column({type: 'varchar', length: 255})
    address: string;
    @Column({type: 'char', length: 10})
    phone: string;
    @Column({type: 'bit'})
    role: boolean;

}
