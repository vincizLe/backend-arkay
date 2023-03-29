"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateToTemplateDocumentMapper = void 0;
function templateToTemplateDocumentMapper(template) {
    return {
        unit: template.unit,
        sessionTemplate: template.sessionTemplate != null || template.sessionTemplate != undefined
            ? {
                sessionName: template.sessionTemplate.sessionName,
                videoUrl: template.sessionTemplate.videoUrl
            }
            : null,
        practiceTemplate: template.practiceTemplate != null || template.practiceTemplate != undefined
            ? {
                statement: template.practiceTemplate.statement,
                algorithm: template.practiceTemplate.algorithm,
                testData: template.practiceTemplate.testData.map(testData => {
                    return {
                        input: testData.input,
                        output: testData.output
                    };
                })
            }
            : null,
        statementTemplate: template.statementTemplate != null || template.statementTemplate != undefined
            ? {
                question: template.statementTemplate.question,
                answer: template.statementTemplate.answer,
                alternativeAnswers: template.statementTemplate
                    .alternativeAnswers
            }
            : null
    };
}
exports.templateToTemplateDocumentMapper = templateToTemplateDocumentMapper;
//# sourceMappingURL=template-to-template-document.mapper.js.map