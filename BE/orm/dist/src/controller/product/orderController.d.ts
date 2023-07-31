import { Request, Response } from "express";
declare class OrderController {
    private service;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderController;
export default _default;
