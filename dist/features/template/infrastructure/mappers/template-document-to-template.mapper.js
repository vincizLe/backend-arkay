"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateDocumentToTemplate = void 0;
const practice_template_entity_1 = require("../../domain/entities/practice-template.entity");
const session_template_entity_1 = require("../../domain/entities/session-template.entity");
const statement_template_entity_1 = require("../../domain/entities/statement-template.entity");
const template_entity_1 = require("../../domain/entities/template.entity");
const test_data_entity_1 = require("../../domain/entities/test-data.entity");
function templateDocumentToTemplate(templateDocument) {
    console.log(templateDocument);
    return template_entity_1.Template.create({
        unit: templateDocument.unit,
        sessionTemplate: templateDocument.sessionTemplate != null || templateDocument.sessionTemplate != undefined
            ? session_template_entity_1.SessionTemplate.create({
                sessionName: templateDocument.sessionTemplate.sessionName,
                videoUrl: templateDocument.sessionTemplate.videoUrl
            })
            : null,
        practiceTemplate: templateDocument.practiceTemplate != null || templateDocument.practiceTemplate != undefined
            ? practice_template_entity_1.PracticeTemplate.create({
                statement: templateDocument.practiceTemplate.statement,
                algorithm: templateDocument.practiceTemplate.algorithm,
                testData: templateDocument.practiceTemplate.testData.map(testData => {
                    return test_data_entity_1.TestData.create({
                        input: testData.input,
                        output: testData.output
                    });
                })
            })
            : null,
        statementTemplate: templateDocument.statementTemplate != null || templateDocument.statementTemplate != undefined
            ? statement_template_entity_1.StatementTemplate.create({
                question: templateDocument.statementTemplate.question,
                answer: templateDocument.statementTemplate.answer,
                alternativeAnswers: templateDocument.statementTemplate
                    .alternativeAnswers
            })
            : null
    });
}
exports.templateDocumentToTemplate = templateDocumentToTemplate;
//# sourceMappingURL=template-document-to-template.mapper.js.map