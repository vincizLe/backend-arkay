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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHttpController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_dto_1 = require("../dto/create.dto");
const get_user_id_dto_1 = require("../dto/get-user-id.dto");
const list_purchased_items_dto_1 = require("../dto/list-purchased-items.dto");
const user_id_dto_1 = require("../dto/user-id.dto");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("../services/user.service");
let UserHttpController = class UserHttpController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createDto) {
        await this.userService.create(createDto);
    }
    async update(userDto) {
        await this.userService.update(userDto);
    }
    async detail({ userId }) {
        return await this.userService.detail(userId);
    }
    async list() {
        return await this.userService.list();
    }
    async getUserId({ email, password }) {
        return await this.userService.getUserId(email, password);
    }
    async delete({ userId }) {
        await this.userService.delete(userId);
    }
    async listPurchasedItems({ userId }, { itemType }) {
        return await this.userService.listPurchasedItem(userId, itemType);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear usuario' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar usuario' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener usuario por id' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "detail", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener listado de usuarios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/get-user-id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener id del usuario por correo y constraseña' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_id_dto_1.GetUserIdDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "getUserId", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar usuario por id' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/:userId/list-purchased-items'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los items comprados por el usario' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto, list_purchased_items_dto_1.ListPurchasedItemsDto]),
    __metadata("design:returntype", Promise)
], UserHttpController.prototype, "listPurchasedItems", null);
UserHttpController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)({ path: 'user' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserHttpController);
exports.UserHttpController = UserHttpController;
//# sourceMappingURL=user-http.controller.js.map