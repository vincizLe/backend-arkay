"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Practice = void 0;
class Practice {
    constructor() {
        this.testData = Array();
    }
    static create(params) {
        const practice = new Practice();
        if (params.id != null && params.id != undefined)
            practice.id = params.id;
        practice.statement = params.statement;
        practice.testData = params.testData;
        practice.isCompleted = params.isCompleted;
        return practice;
    }
}
exports.Practice = Practice;
//# sourceMappingURL=practice.entity.js.map