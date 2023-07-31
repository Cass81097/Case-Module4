"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controller/user/userController"));
const listUserRouter = (0, express_1.Router)();
listUserRouter.post('/register', userController_1.default.register);
listUserRouter.post('/login', userController_1.default.login);
exports.default = listUserRouter;
//# sourceMappingURL=listUserRouter.js.map