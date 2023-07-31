"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const inventory_1 = require("../../entity/product/inventory");
class InvenService {
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
        this.getAllPrdInStorehouse = async (storehouseId) => {
            return await this.repository
                .createQueryBuilder("inventory")
                .leftJoinAndSelect("inventory.storeHouseId", "storehouse")
                .select(["inventory.id", "inventory.name", "inventory.costPrice", "inventory.quantity"])
                .where("storehouse.id = :storeHouseId", { storehouseId })
                .getMany();
        };
        this.repository = data_source_1.AppDataSource.getRepository(inventory_1.Inventory);
    }
}
exports.default = new InvenService();
//# sourceMappingURL=invenService.js.map