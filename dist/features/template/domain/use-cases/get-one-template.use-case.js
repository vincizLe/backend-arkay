"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneTemplateUseCase = void 0;
class GetOneTemplateUseCase {
    constructor(templateRepository) {
        this.templateRepository = templateRepository;
    }
    async execute(unit) {
        return await this.templateRepository.getOne(unit);
    }
}
exports.GetOneTemplateUseCase = GetOneTemplateUseCase;
//# sourceMappingURL=get-one-template.use-case.js.map