import { InfoUser } from "../../entity/user/infoUser";
import { LogisticService } from "../Service";
declare class InfoUserService implements LogisticService<InfoUser> {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: InfoUserService;
export default _default;
