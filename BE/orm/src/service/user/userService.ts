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
        return this.repository.save(user)
    }

    checkUser = async (account) => {
    
        let accFind = await this.repository.findOneBy({username: account.username})
        console.log(accFind);
        
        if(!accFind){
            return "Fail"
        } else {
            if(accFind.password == account.password){
                return accFind
            } else {
                return "Fail"
            }
        }
    }

}
export default new UserService()
