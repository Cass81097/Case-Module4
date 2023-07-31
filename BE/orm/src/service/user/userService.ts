import {AppDataSource} from "../../data-source";
import {ListUser} from "../../entity/user/listUser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../../middleware/jwt";
class UserService {
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(ListUser);
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
