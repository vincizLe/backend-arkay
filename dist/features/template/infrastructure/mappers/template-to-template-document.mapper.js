"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateToTemplateDocumentMapper = void 0;
function templateToTemplateDocumentMapper(template) {
    var _a, _b;
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
        statementsTemplate: (_b = (_a = template.statementsTemplate) === null || _a === void 0 ? void 0 : _a.map(statementTemplate => {
            return {
                question: statementTemplate.question,
                answer: statementTemplate.answer,
                alternativeAnswers: statementTemplate.alternativeAnswers
            };
        })) !== null && _b !== void 0 ? _b : []
    };
}
exports.templateToTemplateDocumentMapper = templateToTemplateDocumentMapper;
//# sourceMappingURL=template-to-template-document.mapper.js.map