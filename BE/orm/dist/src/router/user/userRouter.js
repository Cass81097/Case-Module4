"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listUserRouter_1 = __importDefault(require("./listUserRouter"));
const infoUserRouter_1 = __importDefault(require("./infoUserRouter"));
const userRouter = (0, express_1.Router)();
userRouter.use('/list', listUserRouter_1.default);
userRouter.use('/infoUser', infoUserRouter_1.default);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map