import { LocalPost } from "../../entity/location/localPost";
import { LogisticService } from "../Service";
declare class LocalPostService implements LogisticService<LocalPost> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: LocalPostService;
export default _default;