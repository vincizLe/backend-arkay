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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../domain/entities/user.entity");
const user_repository_1 = require("../../domain/repositories/user.repository");
const get_detail_use_case_1 = require("../../domain/use-cases/get-detail.use-case");
const get_user_id_use_case_1 = require("../../domain/use-cases/get-user-id.use-case");
const save_use_case_1 = require("../../domain/use-cases/save.use-case");
const user_to_user_dto_mapper_1 = require("../mappers/user-to-user-dto.mapper");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createDto) {
        const useCase = new save_use_case_1.SaveUseCase(this.userRepository);
        await useCase.execute(new user_entity_1.User({
            email: createDto.email,
            password: createDto.password,
            name: createDto.name,
            lastname: createDto.lastname
        }));
    }
    async update(userDto) {
        const useCase = new save_use_case_1.SaveUseCase(this.userRepository);
        await useCase.execute(new user_entity_1.User({
            id: userDto.id,
            email: userDto.email,
            password: userDto.password,
            name: userDto.name,
            lastname: userDto.lastname
        }));
    }
    async detail(userId) {
        const useCase = new get_detail_use_case_1.GetDetailUseCase(this.userRepository);
        const user = await useCase.execute(userId);
        return (0, user_to_user_dto_mapper_1.userToUserDto)(user);
    }
    async getUserId(email, password) {
        const useCase = new get_user_id_use_case_1.GetUserIdUseCase(this.userRepository);
        return await useCase.execute(email, password);
    }
    async delete(userId) {
        const useCase = new get_detail_use_case_1.GetDetailUseCase(this.userRepository);
        await useCase.execute(userId);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map