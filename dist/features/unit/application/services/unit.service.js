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
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const template_repository_1 = require("../../../template/domain/repositories/template.repository");
const unit_repository_1 = require("../../domain/repositories/unit.repository");
const get_assessment_use_case_1 = require("../../domain/use-cases/get-assessment.use-case");
const save_unit_use_case_1 = require("../../domain/use-cases/save-unit.use-case");
const assessment_to_assessment_detail_dto_1 = require("../mappers/assessment-to-assessment-detail.dto");
let UnitService = class UnitService {
    constructor(unitRepository, templateRepository) {
        this.unitRepository = unitRepository;
        this.templateRepository = templateRepository;
    }
    async save(userId) {
        const useCase = new save_unit_use_case_1.SaveUnitUseCase(this.unitRepository, this.templateRepository);
        await useCase.execute(userId);
    }
    async getAssessment(unitId) {
        const useCase = new get_assessment_use_case_1.GetAssessmentUseCase(this.unitRepository);
        return (0, assessment_to_assessment_detail_dto_1.assessmentToAssessmentDetailDto)(await useCase.execute(unitId));
    }
};
UnitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unit_repository_1.UnitRepository, template_repository_1.TemplateRepository])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=unit.service.js.map