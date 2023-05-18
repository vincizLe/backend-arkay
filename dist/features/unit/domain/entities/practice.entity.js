"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Practice = void 0;
class Practice {
    constructor() {
        this.score = 0;
    }
    static create(params) {
        const practice = new Practice();
        if (params.id != null && params.id != undefined)
            practice.id = params.id;
        practice.isCompleted = params.isCompleted;
        if (params.score != null && params.score != undefined)
            practice.score = params.score;
        return practice;
    }
}
exports.Practice = Practice;
//# sourceMappingURL=practice.entity.js.map