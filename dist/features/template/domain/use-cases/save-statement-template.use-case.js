"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveStatementTemplateUseCase = void 0;
const template_entity_1 = require("../entities/template.entity");
class SaveStatementTemplateUseCase {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async execute(unit, statementTemplate) {
        try {
            const template = await this.templateRepository.getOne(unit);
            template.statementTemplate = statementTemplate;
            this.templateRepository.save(template);
        }
        catch (error) {
            this.templateRepository.save(template_entity_1.Template.create({
                unit: unit,
                statementTemplate: statementTemplate
            }));
        }
    }
}
exports.SaveStatementTemplateUseCase = SaveStatementTemplateUseCase;
//# sourceMappingURL=save-statement-template.use-case.js.map