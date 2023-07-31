import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {ListLocation} from "./listLocation";
@Entity()
export class LocalPost {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'varchar', length: 255})
    address: string;
    @ManyToOne(() => ListLocation, (location) => location.id)
    location: ListLocation
}
