export interface LogisticService<T>{
    getAll()
    add(data: T): Promise<T>;
    update(id,data)
    delete(id)
    findById(id)
}