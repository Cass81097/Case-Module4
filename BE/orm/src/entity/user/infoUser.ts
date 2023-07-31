import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {ListUser} from "./listUser";
@Entity()
export class InfoUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'int'})
    age: number;
    @Column({type: 'varchar', length: 255})
    address: string;
    @Column({type: 'char', length: 10})
    phone: string;
    @ManyToOne(() => ListUser, (user) => user.id)
    user: ListUser;
}
