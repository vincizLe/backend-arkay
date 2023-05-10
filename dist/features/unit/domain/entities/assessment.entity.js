"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = void 0;
class Assessment {
    constructor() {
        this.statements = new Array();
    }
    static create(params) {
        const assessment = new Assessment();
        if (params.id != null && params.id != undefined)
            assessment.id = params.id;
        assessment.statements = params.statements;
        assessment.isCompleted = params.isCompleted;
        if (params.score != null && params.score != undefined)
            assessment.score = params.score;
        return assessment;
    }
}
exports.Assessment = Assessment;
//# sourceMappingURL=assessment.entity.js.map