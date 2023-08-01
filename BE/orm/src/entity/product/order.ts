import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Storehouse} from "./storehouse";
import {User} from "../user/user";
import {Inventory} from "./inventory";
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'date'})
    date: string;
    @Column()
    sellingPrice: number;
    @Column({type: 'int'})
    quantity: number;
    @Column({type: 'int'})
    shippingCost: number;
    @Column({type: 'int'})
    packingCost: number;
    @ManyToOne(() => Storehouse,(storeHouse) => storeHouse.id)
    storeHouse: Storehouse
    @ManyToOne(() => User, (user) => user.id)
    user: User
    @ManyToOne(() => Inventory, (inven) => inven.id)
    inventory: Inventory
}
