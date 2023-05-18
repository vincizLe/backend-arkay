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
const user_id_dto_1 = require("../../../user/application/dto/user-id.dto");
const assessment_dto_1 = require("../dto/assessment.dto");
const practice_dto_1 = require("../dto/practice.dto");
const session_dto_1 = require("../dto/session.dto");
const unit_name_dto_1 = require("../dto/unit-name.dto");
const unit_service_1 = require("../services/unit.service");
let UnitHttpController = class UnitHttpController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async createUnit({ userId }) {
        return await this.unitService.save(userId);
    }
    async updateSession({ unitName, userId }, sessionDto) {
        return await this.unitService.saveSession(unitName, userId, sessionDto);
    }
    async updateAssessment({ unitName, userId }, assessmentDto) {
        return await this.unitService.saveAssessment(unitName, userId, assessmentDto);
    }
    async updatePractice({ unitName, userId }, practiceDto) {
        return await this.unitService.savePractice(unitName, userId, practiceDto);
    }
    async getSession({ unitName, userId }) {
        return await this.unitService.getSession(unitName, userId);
    }
    async getAssessment({ unitName, userId }) {
        return await this.unitService.getAssessment(unitName, userId);
    }
    async getPractice({ unitName, userId }) {
        return await this.unitService.getPractice(unitName, userId);
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
    (0, decorators_1.Put)('/session'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar sesión' }),
    __param(0, (0, decorators_1.Query)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto, session_dto_1.SessionDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "updateSession", null);
__decorate([
    (0, decorators_1.Put)('/assessment'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar evaluación' }),
    __param(0, (0, decorators_1.Query)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto, assessment_dto_1.AssessmentDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "updateAssessment", null);
__decorate([
    (0, decorators_1.Put)('/practice'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar práctica' }),
    __param(0, (0, decorators_1.Query)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto, practice_dto_1.PracticeDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "updatePractice", null);
__decorate([
    (0, decorators_1.Get)('/session'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener sesión' }),
    (0, swagger_1.ApiOkResponse)({ type: session_dto_1.SessionDto, description: 'Evaluación' }),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "getSession", null);
__decorate([
    (0, decorators_1.Get)('/assessment'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener evaluación' }),
    (0, swagger_1.ApiOkResponse)({ type: assessment_dto_1.AssessmentDto, description: 'Evaluación' }),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "getAssessment", null);
__decorate([
    (0, decorators_1.Get)('/practice'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener práctica' }),
    (0, swagger_1.ApiOkResponse)({ type: practice_dto_1.PracticeDto, description: 'Evaluación' }),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_name_dto_1.UnitNameDto]),
    __metadata("design:returntype", Promise)
], UnitHttpController.prototype, "getPractice", null);
UnitHttpController = __decorate([
    (0, swagger_1.ApiTags)('Unit'),
    (0, common_1.Controller)({ path: 'unit' }),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitHttpController);
exports.UnitHttpController = UnitHttpController;
//# sourceMappingURL=unit-http.controller.js.map