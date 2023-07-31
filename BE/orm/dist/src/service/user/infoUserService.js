"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const infoUser_1 = require("../../entity/user/infoUser");
class InfoUserService {
    constructor() {
        this.getAll = async () => {
            return this.repository.find();
        };
        this.add = async (index) => {
            return this.repository.save(index);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.findOne({
                where: {
                    id: id
                }
            });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.repository = data_source_1.AppDataSource.getRepository(infoUser_1.InfoUser);
    }
}
exports.default = new InfoUserService();
//# sourceMappingURL=infoUserService.js.map