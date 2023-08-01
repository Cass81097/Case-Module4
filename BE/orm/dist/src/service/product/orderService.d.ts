import { Order } from "../../entity/product/order";
import { LogisticService } from "../Service";
declare class OrderService implements LogisticService<Order> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    getAllOrderByUserId: (userId: any) => Promise<any>;
    getAllByAsc: () => Promise<any>;
    getAllByDesc: () => Promise<any>;
}
declare const _default: OrderService;
export default _default;
