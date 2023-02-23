"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementTemplate = void 0;
class StatementTemplate {
    constructor() {
        this.alternativeAnswers = new Array();
    }
    static create(params) {
        const statementTemplate = new StatementTemplate();
        statementTemplate.question = params.question;
        statementTemplate.answer = params.answer;
        statementTemplate.alternativeAnswers = params.alternativeAnswers;
        return statementTemplate;
    }
}
exports.StatementTemplate = StatementTemplate;
//# sourceMappingURL=statement-template.entity.js.map