"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationController_1 = __importDefault(require("../../controller/location/locationController"));
const listLocationRouter = (0, express_1.Router)();
listLocationRouter.get('/', locationController_1.default.findAll);
listLocationRouter.post('/', locationController_1.default.add);
listLocationRouter.delete('/:id', locationController_1.default.delete);
listLocationRouter.put('/:id', locationController_1.default.update);
listLocationRouter.get('/:id', locationController_1.default.findById);
exports.default = listLocationRouter;
//# sourceMappingURL=listLocationRouter.js.map