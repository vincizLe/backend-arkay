"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateToTemplateDto = void 0;
const test_data_entity_1 = require("../../domain/entities/test-data.entity");
const practice_template_dto_1 = require("../dto/practice-template.dto");
const session_template_dto_1 = require("../dto/session-template.dto");
const statement_template_dto_1 = require("../dto/statement-template.dto");
const template_dto_1 = require("../dto/template.dto");
function templateToTemplateDto(template) {
    return new template_dto_1.TemplateDto({
        unit: template.unit,
        sessionTemplate: template.sessionTemplate != null || template.sessionTemplate != undefined
            ? new session_template_dto_1.SessionTemplateDto({
                sessionName: template.sessionTemplate.sessionName,
                videoUrl: template.sessionTemplate.videoUrl
            })
            : null,
        statementTemplate: template.statementTemplate != null || template.statementTemplate != undefined
            ? new statement_template_dto_1.StatementTemplateDto({
                question: template.statementTemplate.question,
                answer: template.statementTemplate.answer,
                alternativeAnswers: template.statementTemplate
                    .alternativeAnswers
            })
            : null,
        practiceTemplate: template.practiceTemplate != null || template.practiceTemplate != undefined
            ? new practice_template_dto_1.PracticeTemplateDto({
                statement: template.practiceTemplate.statement,
                testData: template.practiceTemplate.testData.map(testData => {
                    return test_data_entity_1.TestData.create({
                        input: testData.input,
                        output: testData.output
                    });
                }),
                algorithm: template.practiceTemplate.algorithm
            })
            : null
    });
}
exports.templateToTemplateDto = templateToTemplateDto;
//# sourceMappingURL=template-to-template-dto.js.map