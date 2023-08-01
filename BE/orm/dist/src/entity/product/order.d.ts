import { Storehouse } from "./storehouse";
import { User } from "../user/user";
import { Inventory } from "./inventory";
export declare class Order {
    id: number;
    date: string;
    sellingPrice: number;
    quantity: number;
    shippingCost: number;
    packingCost: number;
    storeHouse: Storehouse;
    user: User;
    inventory: Inventory;
}
