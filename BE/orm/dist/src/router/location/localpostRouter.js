"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localPostController_1 = __importDefault(require("../../controller/location/localPostController"));
const localpostRouter = (0, express_1.Router)();
localpostRouter.get('/', localPostController_1.default.findAll);
localpostRouter.post('/', localPostController_1.default.add);
localpostRouter.delete('/:id', localPostController_1.default.delete);
localpostRouter.put('/:id', localPostController_1.default.update);
localpostRouter.get('/:id', localPostController_1.default.findById);
exports.default = localpostRouter;
//# sourceMappingURL=localpostRouter.js.map