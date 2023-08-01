import {AppDataSource} from "../../data-source";
import {Storehouse} from "../../entity/product/storehouse";
import {LogisticService} from "../Service";

class StorehouseService implements LogisticService<Storehouse>{
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Storehouse);
    }

    getAll = async () => {
        return this.repository.find()
    }
    add = async (index) => {
        return this.repository.save(index)
    }

    delete = async (id) => {
        return await this.repository.delete(id)
    }

    findById = async (id) => {
        return await this.repository.findOne({
            where: {
                id: id
            }
        })
    }

    update = async (id, data) => {
        return await this.repository.update(id,data)
    }
}
export default new StorehouseService()
