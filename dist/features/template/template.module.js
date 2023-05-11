"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule = void 0;
const common_1 = require("@nestjs/common");
const template_http_controller_1 = require("./application/controllers/template-http.controller");
const template_provider_1 = require("./template.provider");
let TemplateModule = class TemplateModule {
};
TemplateModule = __decorate([
    (0, common_1.Module)({
        providers: [template_provider_1.templateServiceProvider, template_provider_1.templateRepositoryProvider],
        controllers: [template_http_controller_1.TemplateHttpController],
        exports: [template_provider_1.templateRepositoryProvider]
    })
], TemplateModule);
exports.TemplateModule = TemplateModule;
//# sourceMappingURL=template.module.js.map