"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storehouseService_1 = __importDefault(require("../../service/product/storehouseService"));
class StorehouseController {
    constructor() {
        this.findAll = async (req, res) => {
            let object = await this.service.getAll();
            res.json(object);
        };
        this.add = async (req, res) => {
            await this.service.add(req.body);
            res.json('complete');
        };
        this.delete = async (req, res) => {
            await this.service.delete(req.params.id);
            res.json('complete');
        };
        this.update = async (req, res) => {
            let object = await this.service.update(req.params.id, req.body);
            res.json(object);
        };
        this.findById = async (req, res) => {
            let object = await this.service.findById(req.params.id);
            res.json(object);
        };
        this.service = storehouseService_1.default;
    }
}
exports.default = new StorehouseController();
//# sourceMappingURL=storehouseController.js.map