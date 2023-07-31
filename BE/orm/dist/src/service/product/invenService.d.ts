import { Inventory } from "../../entity/product/inventory";
import { LogisticService } from "../Service";
declare class InvenService implements LogisticService<Inventory> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: InvenService;
export default _default;
