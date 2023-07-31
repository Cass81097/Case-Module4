import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Storehouse} from "./storehouse";
@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    costPrice: number;
    @Column({type: 'int'})
    quantity: number;
    @ManyToOne(() => Storehouse, (storeHouse) => storeHouse.id)
    storeHouse: Storehouse[];
}
