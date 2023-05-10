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
exports.TemplateService = void 0;
const common_1 = require("@nestjs/common");
const practice_template_entity_1 = require("../../domain/entities/practice-template.entity");
const session_template_entity_1 = require("../../domain/entities/session-template.entity");
const template_repository_1 = require("../../domain/repositories/template.repository");
const get_one_template_use_case_1 = require("../../domain/use-cases/get-one-template.use-case");
const update_practice_template_use_case_1 = require("../../domain/use-cases/update-practice-template.use-case");
const update_session_template_use_case_1 = require("../../domain/use-cases/update-session-template.use-case");
const update_statement_template_use_case_1 = require("../../domain/use-cases/update-statement-template.use-case");
const template_to_template_dto_1 = require("../mappers/template-to-template-dto");
let TemplateService = class TemplateService {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async updateSessionTemplate({ sessionName, videoUrl, unit }) {
        const useCase = new update_session_template_use_case_1.UpdateSessionTemplateUseCase(this.templateRepository);
        await useCase.execute(unit, session_template_entity_1.SessionTemplate.create({
            sessionName,
            videoUrl
        }));
    }
    async updateStatementsTemplate({ unit, statements }) {
        const useCase = new update_statement_template_use_case_1.UpdateStatementTemplateUseCase(this.templateRepository);
        await useCase.execute(unit, statements);
    }
    async updatePracticeTemplate({ statement, testData, algorithm, unit }) {
        const useCase = new update_practice_template_use_case_1.UpdatePracticeTemplateUseCase(this.templateRepository);
        await useCase.execute(unit, practice_template_entity_1.PracticeTemplate.create({
            statement,
            testData,
            algorithm
        }));
    }
    async getTemplate(unit) {
        const useCase = new get_one_template_use_case_1.GetOneTemplateUseCase(this.templateRepository);
        return (0, template_to_template_dto_1.templateToTemplateDto)(await useCase.execute(unit));
    }
};
TemplateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [template_repository_1.TemplateRepository])
], TemplateService);
exports.TemplateService = TemplateService;
//# sourceMappingURL=template.service.js.map