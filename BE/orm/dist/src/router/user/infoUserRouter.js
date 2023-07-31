"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoUserController_1 = __importDefault(require("../../controller/user/infoUserController"));
const infoUserRouter = (0, express_1.Router)();
infoUserRouter.get('/', infoUserController_1.default.findAll);
infoUserRouter.post('/', infoUserController_1.default.add);
infoUserRouter.delete('/:id', infoUserController_1.default.delete);
infoUserRouter.put('/:id', infoUserController_1.default.update);
infoUserRouter.get('/:id', infoUserController_1.default.findById);
exports.default = infoUserRouter;
//# sourceMappingURL=infoUserRouter.js.map