"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const user_1 = require("../../entity/user/user");
class UserService {
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
        this.register = async (user) => {
            return this.repository.save(user);
        };
        this.checkUser = async (account) => {
            let accFind = await this.repository.findOneBy({ username: account.username });
            console.log(accFind);
            if (!accFind) {
                return "Fail";
            }
            else {
                if (accFind.password == account.password) {
                    return accFind;
                }
                else {
                    return "Fail";
                }
            }
        };
        this.repository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map