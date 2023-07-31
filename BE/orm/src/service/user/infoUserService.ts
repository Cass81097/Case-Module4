import {AppDataSource} from "../../data-source";
import {InfoUser} from "../../entity/user/infoUser";
import {LogisticService} from "../Service";

class InfoUserService implements LogisticService<InfoUser>{
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(InfoUser);
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
export default new InfoUserService()
