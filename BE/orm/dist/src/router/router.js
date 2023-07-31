"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationRouter_1 = __importDefault(require("./location/locationRouter"));
const productRouter_1 = __importDefault(require("./product/productRouter"));
const userRouter_1 = __importDefault(require("./user/userRouter"));
const router = (0, express_1.Router)();
router.use('/location', locationRouter_1.default);
router.use('/products', productRouter_1.default);
router.use('/user', userRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map