import {AppDataSource} from "../../data-source";
import {Order} from "../../entity/product/order";
import {LogisticService} from "../Service";

class OrderService implements LogisticService<Order>{
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Order);
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
export default new OrderService()
