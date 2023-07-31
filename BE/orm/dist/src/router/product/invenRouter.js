"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invenController_1 = __importDefault(require("../../controller/product/invenController"));
const invenRouter = (0, express_1.Router)();
invenRouter.get('/', invenController_1.default.findAll);
invenRouter.post('/', invenController_1.default.add);
invenRouter.delete('/:id', invenController_1.default.delete);
invenRouter.put('/:id', invenController_1.default.update);
invenRouter.get('/:id', invenController_1.default.findById);
exports.default = invenRouter;
//# sourceMappingURL=invenRouter.js.map