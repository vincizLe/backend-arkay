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
exports.UnitHttpController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const create_many_sessions_dto_1 = require("../dto/create-many-sessions.dto");
const session_detail_dto_1 = require("../dto/session-detail.dto");
const unit_service_1 = require("../services/unit.service");
let UnitHttpController = class UnitHttpController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async getSessionDetail(unitId, sessionId) {
        return;
    }
    async createManySessions(createManySessionsDto) {
        return;
    }
};
__decorate([
    (0, common_1.Get)('/:unitId/session/:sessionId'),
    (0, dist_1.ApiOkResponse)({ type: session_detail_dto_1.SessionDetailDto, description: 'Session' }),
    __param(0, (0, decorators_1.Param)('unitId')),
    __param(1, (0, decorators_1.Param)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "getSessionDetail", null);
__decorate([
    (0, decorators_1.Post)('/:unitId/session'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_many_sessions_dto_1.CreateManySessionsDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "createManySessions", null);
UnitHttpController = __decorate([
    (0, swagger_1.ApiTags)('Session'),
    (0, common_1.Controller)({ path: 'unit' }),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitHttpController);
exports.UnitHttpController = UnitHttpController;
//# sourceMappingURL=unit-http.controller.js.map