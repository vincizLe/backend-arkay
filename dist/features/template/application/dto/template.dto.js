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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const unit_enum_1 = require("../../../../core/enums/unit.enum");
const statement_template_entity_1 = require("../../domain/entities/statement-template.entity");
const practice_template_dto_1 = require("./practice-template.dto");
const session_template_dto_1 = require("./session-template.dto");
class TemplateDto {
    constructor(entity) {
        Object.assign(this, entity);
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(unit_enum_1.UnitEnum),
    (0, swagger_1.ApiProperty)({ type: String, enum: unit_enum_1.UnitEnum.toArray() }),
    __metadata("design:type", String)
], TemplateDto.prototype, "unit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiProperty)({ type: practice_template_dto_1.PracticeTemplateDto }),
    (0, class_transformer_1.Type)(() => practice_template_dto_1.PracticeTemplateDto),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", practice_template_dto_1.PracticeTemplateDto)
], TemplateDto.prototype, "practiceTemplate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiProperty)({ type: session_template_dto_1.SessionTemplateDto }),
    (0, class_transformer_1.Type)(() => session_template_dto_1.SessionTemplateDto),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", session_template_dto_1.SessionTemplateDto)
], TemplateDto.prototype, "sessionTemplate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    (0, swagger_1.ApiProperty)({ type: practice_template_dto_1.PracticeTemplateDto }),
    (0, class_transformer_1.Type)(() => practice_template_dto_1.PracticeTemplateDto),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", statement_template_entity_1.StatementTemplate)
], TemplateDto.prototype, "statementTemplate", void 0);
exports.TemplateDto = TemplateDto;
//# sourceMappingURL=template.dto.js.map