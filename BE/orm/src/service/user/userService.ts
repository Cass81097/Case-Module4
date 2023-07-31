import {AppDataSource} from "../../data-source";
import {User} from "../../entity/user/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../../middleware/jwt";
class UserService {
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(User);
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
    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.repository.save(user);
    }

    checkUser = async (user) => {
        let userFind = await this.repository.findOneBy({username: user.username});
        if (!userFind) {
            return 'User is not exist'
        } else {
            let passWordCompare = bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: 'admin'
                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 10 * 100
                })
            } else {
                return 'Password is wrong'
            }
        }
    }

}
export default new UserService()
