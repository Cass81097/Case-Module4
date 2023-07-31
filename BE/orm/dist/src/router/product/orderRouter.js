"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../../controller/product/orderController"));
const orderRouter = (0, express_1.Router)();
orderRouter.get('/', orderController_1.default.findAll);
orderRouter.post('/', orderController_1.default.add);
orderRouter.delete('/:id', orderController_1.default.delete);
orderRouter.put('/:id', orderController_1.default.update);
orderRouter.get('/:id', orderController_1.default.findById);
exports.default = orderRouter;
//# sourceMappingURL=orderRouter.js.map