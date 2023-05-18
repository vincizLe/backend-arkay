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
const get_practice_use_case_1 = require("../../domain/use-cases/get-practice.use-case");
const get_session_use_case_1 = require("../../domain/use-cases/get-session.use-case");
const save_assessment_use_case_1 = require("../../domain/use-cases/save-assessment.use-case");
const save_practice_use_case_1 = require("../../domain/use-cases/save-practice.use-case");
const save_session_use_case_1 = require("../../domain/use-cases/save-session.use-case");
const save_unit_use_case_1 = require("../../domain/use-cases/save-unit.use-case");
const assessment_dto_to_assessment_mapper_1 = require("../mappers/assessment-dto-to-assessment.mapper");
const assessment_to_assessment_dto_mapper_1 = require("../mappers/assessment-to-assessment-dto.mapper");
const practice_dto_to_practice_mapper_1 = require("../mappers/practice-dto-to-practice.mapper");
const practice_to_practice_dto_mapper_1 = require("../mappers/practice-to-practice-dto.mapper");
const session_dto_to_session_mapper_1 = require("../mappers/session-dto-to-session.mapper");
const session_to_session_dto_mapper_1 = require("../mappers/session-to-session-dto.mapper");
let UnitService = class UnitService {
    constructor(unitRepository, templateRepository) {
        this.unitRepository = unitRepository;
        this.templateRepository = templateRepository;
    }
    async save(userId) {
        const useCase = new save_unit_use_case_1.SaveUnitUseCase(this.unitRepository, this.templateRepository);
        await useCase.execute(userId);
    }
    async saveSession(unitName, userId, sessionDto) {
        const useCase = new save_session_use_case_1.SaveSessionUseCase(this.unitRepository);
        await useCase.execute(unitName, userId, (0, session_dto_to_session_mapper_1.sessionDtoToSession)(sessionDto));
    }
    async saveAssessment(unitName, userId, assessmentDto) {
        const useCase = new save_assessment_use_case_1.SaveAssessmentUseCase(this.unitRepository);
        await useCase.execute(unitName, userId, (0, assessment_dto_to_assessment_mapper_1.assessmentDtoToAssessment)(assessmentDto));
    }
    async savePractice(unitName, userId, practiceDto) {
        const useCase = new save_practice_use_case_1.SavePracticeUseCase(this.unitRepository);
        await useCase.execute(unitName, userId, (0, practice_dto_to_practice_mapper_1.practiceDtoToPractice)(practiceDto));
    }
    async getSession(unitName, userId) {
        const useCase = new get_session_use_case_1.GetSessionUseCase(this.unitRepository);
        return (0, session_to_session_dto_mapper_1.sessionToSessionDto)(await useCase.execute(unitName, userId));
    }
    async getAssessment(unitName, userId) {
        const useCase = new get_assessment_use_case_1.GetAssessmentUseCase(this.unitRepository);
        return (0, assessment_to_assessment_dto_mapper_1.assessmentToAssessmentDto)(await useCase.execute(unitName, userId));
    }
    async getPractice(unitName, userId) {
        const useCase = new get_practice_use_case_1.GetPracticeUseCase(this.unitRepository);
        return (0, practice_to_practice_dto_mapper_1.practiceToPracticeDto)(await useCase.execute(unitName, userId));
    }
};
UnitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unit_repository_1.UnitRepository, template_repository_1.TemplateRepository])
], UnitService);
exports.UnitService = UnitService;
//# sourceMappingURL=unit.service.js.map