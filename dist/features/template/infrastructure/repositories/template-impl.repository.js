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
exports.TemplateImplRepository = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const template_document_to_template_mapper_1 = require("../mappers/template-document-to-template.mapper");
const template_to_template_document_mapper_1 = require("../mappers/template-to-template-document.mapper");
let TemplateImplRepository = class TemplateImplRepository {
    constructor(db) {
        this.db = db;
        this.collection = db.collection('templates');
    }
    async save(template) {
        console.log(template);
        const templateDocument = (0, template_to_template_document_mapper_1.templateToTemplateDocumentMapper)(template);
        console.log(templateDocument);
        await this.collection.updateOne({ unit: templateDocument.unit }, { $set: { ...templateDocument, createdAt: new Date(), updatedAt: new Date() } }, { upsert: true });
    }
    async getOne(unit) {
        const templateDocument = await this.collection.findOne({ unit });
        if (templateDocument != null && templateDocument != undefined) {
            return (0, template_document_to_template_mapper_1.templateDocumentToTemplate)(templateDocument);
        }
        else {
            throw new common_1.NotFoundException(`No se ha encontrado la plantilla con la unidad: ${unit} `);
        }
    }
};
TemplateImplRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [mongodb_1.Db])
], TemplateImplRepository);
exports.TemplateImplRepository = TemplateImplRepository;
//# sourceMappingURL=template-impl.repository.js.map