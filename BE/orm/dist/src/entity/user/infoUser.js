"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoUser = void 0;
const typeorm_1 = require("typeorm");
const listUser_1 = require("./listUser");
let InfoUser = exports.InfoUser = class InfoUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InfoUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InfoUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], InfoUser.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], InfoUser.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 10 }),
    __metadata("design:type", String)
], InfoUser.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => listUser_1.ListUser, (user) => user.id),
    __metadata("design:type", listUser_1.ListUser)
], InfoUser.prototype, "user", void 0);
exports.InfoUser = InfoUser = __decorate([
    (0, typeorm_1.Entity)()
], InfoUser);
//# sourceMappingURL=infoUser.js.map