import { ListLocation } from "../../entity/location/listLocation";
import { LogisticService } from "../Service";
declare class LocationService implements LogisticService<ListLocation> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: LocationService;
export default _default;
