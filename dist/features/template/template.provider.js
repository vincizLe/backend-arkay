"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateServiceProvider = exports.templateRepositoryProvider = void 0;
const template_service_1 = require("./application/services/template.service");
const template_repository_1 = require("./domain/repositories/template.repository");
const template_impl_repository_1 = require("./infrastructure/repositories/template-impl.repository");
exports.templateRepositoryProvider = {
    provide: template_repository_1.TemplateRepository,
    useClass: template_impl_repository_1.TemplateImplRepository
};
exports.templateServiceProvider = {
    provide: template_service_1.TemplateService,
    inject: [template_repository_1.TemplateRepository],
    useFactory: (templateRepository) => {
        return new template_service_1.TemplateService(templateRepository);
    }
};
//# sourceMappingURL=template.provider.js.map