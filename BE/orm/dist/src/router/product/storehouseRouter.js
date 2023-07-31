"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storehouseController_1 = __importDefault(require("../../controller/product/storehouseController"));
const storehouseRouter = (0, express_1.Router)();
storehouseRouter.get('/', storehouseController_1.default.findAll);
storehouseRouter.post('/', storehouseController_1.default.add);
storehouseRouter.delete('/:id', storehouseController_1.default.delete);
storehouseRouter.put('/:id', storehouseController_1.default.update);
storehouseRouter.get('/:id', storehouseController_1.default.findById);
exports.default = storehouseRouter;
//# sourceMappingURL=storehouseRouter.js.map