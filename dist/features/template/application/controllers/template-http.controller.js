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
exports.TemplateHttpController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const practice_template_dto_1 = require("../dto/practice-template.dto");
const session_template_dto_1 = require("../dto/session-template.dto");
const statement_template_dto_1 = require("../dto/statement-template.dto");
const unit_dto_1 = require("../dto/unit.dto");
const template_service_1 = require("../services/template.service");
let TemplateHttpController = class TemplateHttpController {
    constructor(templateService) {
        this.templateService = templateService;
    }
    async updateSessionTemplate(sessionTemplateDto) {
        return await this.templateService.updateSessionTemplate(sessionTemplateDto);
    }
    async updateStatementTemplate(statementTemplateDto) {
        return await this.templateService.updateStatementTemplate(statementTemplateDto);
    }
    async updatePracticeTemplate(practiceTemplateDto) {
        return await this.templateService.updatePracticeTemplate(practiceTemplateDto);
    }
    async getTemplate({ unit }) {
        return await this.templateService.getTemplate(unit);
    }
};
__decorate([
    (0, common_1.Put)('/session'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar la sessión de la plantilla' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_template_dto_1.SessionTemplateDto]),
    __metadata("design:returntype", Promise)
], TemplateHttpController.prototype, "updateSessionTemplate", null);
__decorate([
    (0, common_1.Put)('/statement'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar la evaluación de la plantilla' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [statement_template_dto_1.StatementTemplateDto]),
    __metadata("design:returntype", Promise)
], TemplateHttpController.prototype, "updateStatementTemplate", null);
__decorate([
    (0, common_1.Put)('/practice'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar la practica de la plantilla' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [practice_template_dto_1.PracticeTemplateDto]),
    __metadata("design:returntype", Promise)
], TemplateHttpController.prototype, "updatePracticeTemplate", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener plantilla' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unit_dto_1.UnitDto]),
    __metadata("design:returntype", Promise)
], TemplateHttpController.prototype, "getTemplate", null);
TemplateHttpController = __decorate([
    (0, swagger_1.ApiTags)('Template'),
    (0, common_1.Controller)({ path: 'template' }),
    __metadata("design:paramtypes", [template_service_1.TemplateService])
], TemplateHttpController);
exports.TemplateHttpController = TemplateHttpController;
//# sourceMappingURL=template-http.controller.js.map