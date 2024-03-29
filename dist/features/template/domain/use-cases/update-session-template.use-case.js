"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSessionTemplateUseCase = void 0;
const template_entity_1 = require("../entities/template.entity");
class UpdateSessionTemplateUseCase {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async execute(unit, sessionTemplate) {
        try {
            const template = await this.templateRepository.getOne(unit);
            template.sessionTemplate = sessionTemplate;
            this.templateRepository.save(template);
        }
        catch (error) {
            this.templateRepository.save(template_entity_1.Template.create({
                unit,
                sessionTemplate: sessionTemplate
            }));
        }
    }
}
exports.UpdateSessionTemplateUseCase = UpdateSessionTemplateUseCase;
//# sourceMappingURL=update-session-template.use-case.js.map