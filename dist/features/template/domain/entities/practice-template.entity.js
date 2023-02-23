"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeTemplate = void 0;
class PracticeTemplate {
    constructor() {
        this.testData = new Array();
    }
    static create(params) {
        const practiceTemplate = new PracticeTemplate();
        practiceTemplate.statement = params.statement;
        practiceTemplate.algorithm = params.algorithm;
        practiceTemplate.testData = params.testData;
        return practiceTemplate;
    }
}
exports.PracticeTemplate = PracticeTemplate;
//# sourceMappingURL=practice-template.entity.js.map