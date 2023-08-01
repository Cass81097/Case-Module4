import { Storehouse } from "../../entity/product/storehouse";
import { LogisticService } from "../Service";
declare class StorehouseService implements LogisticService<Storehouse> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: StorehouseService;
export default _default;
