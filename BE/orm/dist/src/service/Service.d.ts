export interface LogisticService<T> {
    getAll(): any;
    add(data: T): Promise<T>;
    update(id: any, data: any): any;
    delete(id: any): any;
    findById(id: any): any;
}
