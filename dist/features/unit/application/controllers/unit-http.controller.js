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
const user_id_dto_1 = require("src/features/user/application/dto/user-id.dto");
const assessment_detail_dto_1 = require("../dto/assessment-detail.dto");
const unit_id_dto_1 = require("../dto/unit-id.dto");
const unit_service_1 = require("../services/unit.service");
let UnitHttpController = class UnitHttpController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async createUnit({ id }) {
        return await this.unitService.save(id);
    }
    async getAssessment({ unitId }) {
        return await this.unitService.getAssessment(unitId);
    }
};
__decorate([
    (0, decorators_1.Post)(''),
    (0, swagger_1.ApiOperation)({ summary: 'Crear unidad' }),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_id_dto_1.UserIdDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "createUnit", null);
__decorate([
    (0, decorators_1.Get)(':unitId/assessment'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener evaluación' }),
    (0, swagger_1.ApiOkResponse)({ type: assessment_detail_dto_1.AssessmentDetailDto, description: 'Evaluación' }),
    __param(0, (0, decorators_1.Param)('unitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_id_dto_1.UnitIdDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "getAssessment", null);
UnitHttpController = __decorate([
    (0, swagger_1.ApiTags)('Session'),
    (0, common_1.Controller)({ path: 'unit' }),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitHttpController);
exports.UnitHttpController = UnitHttpController;
//# sourceMappingURL=unit-http.controller.js.map