import { Storehouse } from "./storehouse";
import { InfoUser } from "../user/infoUser";
import { Inventory } from "./inventory";
export declare class Order {
    id: number;
    date: string;
    sellingPrice: number;
    quantity: number;
    shippingCost: number;
    packingCost: number;
    storeHouse: Storehouse;
    infoUser: InfoUser;
    inventory: Inventory;
}
