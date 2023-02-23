"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePracticeTemplateUseCase = void 0;
const template_entity_1 = require("../entities/template.entity");
class UpdatePracticeTemplateUseCase {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async execute(unit, practiceTemplate) {
        try {
            const template = await this.templateRepository.getOne(unit);
            template.practiceTemplate = practiceTemplate;
            this.templateRepository.save(template);
        }
        catch (error) {
            this.templateRepository.save(template_entity_1.Template.create({
                unit,
                practiceTemplate: practiceTemplate
            }));
        }
    }
}
exports.UpdatePracticeTemplateUseCase = UpdatePracticeTemplateUseCase;
//# sourceMappingURL=update-practice-template.use-case.js.map