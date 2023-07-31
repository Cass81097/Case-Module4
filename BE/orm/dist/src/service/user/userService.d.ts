declare class UserService {
    private repository;
    constructor();
    getAll: () => Promise<any>;
    add: (index: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
