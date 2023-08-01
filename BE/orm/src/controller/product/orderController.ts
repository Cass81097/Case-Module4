import {Request, Response} from "express";
import orderService from "../../service/product/orderService";
import * as fs from "fs";

class OrderController{
    private service;

    constructor() {
        this.service = orderService;
    }

    findAll = async (req: Request, res: Response) => {
        let {asc, desc} = req.query
        if (asc === undefined && desc === undefined) {
            let object = await this.service.getAll();
            res.json(object);
        } else if (asc == ''){
            let object = await this.service.getAllByAsc()
            res.json(object)
        } else if (desc == '') {
            let object = await this.service.getAllByDesc()
            res.json(object)
        }
    }
    add = async (req: Request, res: Response) => {
        await this.service.add(req.body);
        res.json('complete');
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
    getAllOrderByUser = async (req: Request, res: Response) => {
        let object = await this.service.getAllOrderByUserId(req.params.id)
        res.json(object)
    }
}
export default new OrderController()