import {Request, Response} from "express";
import userService from "../../service/user/userService";
const session = require('express-session');

class UserController{
    private service;

    constructor() {
        this.service = userService;
    }

    findAll = async (req: Request, res: Response) => {
        let object = await this.service.getAll();
        res.json(object);
    }
    delete = async (req: Request, res: Response) => {
        await this.service.delete(req.params.id)
        res.json('complete')
    }
    update = async (req: Request, res: Response) => {
        let object = await this.service.update(req.params.id, req.body)
        res.json(object)
    }
    findById = async (req: Request, res: Response) => {
        let object = await this.service.findById(req.params.id)
        res.json(object)
    }

    register = async (req: Request, res: Response) => {
        await userService.register(req.body);
        res.status(201).json('Create user success')
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }




}
export default new UserController()