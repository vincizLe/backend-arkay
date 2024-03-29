"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./features/database/database.module");
const product_module_1 = require("./features/product/product.module");
const project_module_1 = require("./features/project/project.module");
const template_module_1 = require("./features/template/template.module");
const unit_module_1 = require("./features/unit/unit.module");
const user_module_1 = require("./features/user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, template_module_1.TemplateModule, user_module_1.UserModule, unit_module_1.UnitModule, project_module_1.ProjectModule, product_module_1.ProductModule],
        providers: [common_1.Logger]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map