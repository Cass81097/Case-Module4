import {AppDataSource} from "../../data-source";
import {Inventory} from "../../entity/product/inventory";
import {LogisticService} from "../Service";

class InvenService implements LogisticService<Inventory>{
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Inventory);
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
    getAllPrdInStorehouse = async (storehouseId) =>{
        return await this.repository
            .createQueryBuilder("inventory")
            .leftJoinAndSelect("inventory.storeHouseId","storehouse")
            .select(["inventory.id", "inventory.name", "inventory.costPrice", "inventory.quantity"])
            .where("storehouse.id = :storeHouseId", {storehouseId})
            .getMany()
    }
}
export default new InvenService()
