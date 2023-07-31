"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invenRouter_1 = __importDefault(require("./invenRouter"));
const orderRouter_1 = __importDefault(require("./orderRouter"));
const storehouseRouter_1 = __importDefault(require("./storehouseRouter"));
const productsRouter = (0, express_1.Router)();
productsRouter.use('/inventory', invenRouter_1.default);
productsRouter.use('/order', orderRouter_1.default);
productsRouter.use('/storehouse', storehouseRouter_1.default);
exports.default = productsRouter;
//# sourceMappingURL=productRouter.js.map