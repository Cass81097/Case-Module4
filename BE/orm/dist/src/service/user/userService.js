"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const user_1 = require("../../entity/user/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../../middleware/jwt");
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
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.repository.save(user);
        };
        this.checkUser = async (user) => {
            let userFind = await this.repository.findOneBy({ username: user.username });
            if (!userFind) {
                return 'User is not exist';
            }
            else {
                let passWordCompare = bcrypt_1.default.compare(user.password, userFind.password);
                if (passWordCompare) {
                    let payload = {
                        idUser: userFind.id,
                        username: userFind.username,
                        role: 'admin'
                    };
                    return jsonwebtoken_1.default.sign(payload, jwt_1.SECRET, {
                        expiresIn: 36000 * 10 * 100
                    });
                }
                else {
                    return 'Password is wrong';
                }
            }
        };
        this.repository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map