"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listLocationRouter_1 = __importDefault(require("./listLocationRouter"));
const localpostRouter_1 = __importDefault(require("./localpostRouter"));
const locationRouter = (0, express_1.Router)();
locationRouter.use('/list', listLocationRouter_1.default);
locationRouter.use('/localpost', localpostRouter_1.default);
exports.default = locationRouter;
//# sourceMappingURL=locationRouter.js.map