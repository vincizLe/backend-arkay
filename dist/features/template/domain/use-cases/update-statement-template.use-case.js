"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatementTemplateUseCase = void 0;
const template_entity_1 = require("../entities/template.entity");
class UpdateStatementTemplateUseCase {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async execute(unit, statementsTemplate) {
        try {
            const template = await this.templateRepository.getOne(unit);
            template.statementsTemplate = statementsTemplate;
            this.templateRepository.save(template);
        }
        catch (error) {
            this.templateRepository.save(template_entity_1.Template.create({
                unit,
                statementsTemplate
            }));
        }
    }
}
exports.UpdateStatementTemplateUseCase = UpdateStatementTemplateUseCase;
//# sourceMappingURL=update-statement-template.use-case.js.map