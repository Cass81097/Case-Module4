import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Storehouse {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    address: string;
    @Column()
    rentalPrice: number;
}
