"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavePracticeTemplateUseCase = void 0;
const template_entity_1 = require("../entities/template.entity");
class SavePracticeTemplateUseCase {
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
exports.SavePracticeTemplateUseCase = SavePracticeTemplateUseCase;
//# sourceMappingURL=save-practice-template.use-case.js.map