import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Storehouse} from "./storehouse";
import {InfoUser} from "../user/infoUser";
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
    @ManyToOne(() => InfoUser, (infoUser) => infoUser.id)
    infoUser: InfoUser
    @ManyToOne(() => Inventory, (inven) => inven.id)
    inventory: Inventory
}
