"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
class Statement {
    constructor() {
        this.alternativeAnswers = new Array();
    }
    static create(params) {
        const statement = new Statement();
        if (params.id != null && params.id != undefined)
            statement.id = params.id;
        statement.question = params.question;
        statement.answer = params.answer;
        statement.alternativeAnswers = params.alternativeAnswers;
        statement.isCompleted = params.isCompleted;
        if (params.score != null && params.score != undefined)
            statement.score = params.score;
        return statement;
    }
}
exports.Statement = Statement;
//# sourceMappingURL=statement.entity.js.map