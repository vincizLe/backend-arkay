"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
class Unit {
    static create(params) {
        const unit = new Unit();
        if (params.id != null && params.id != undefined)
            unit.id = params.id;
        unit.name = params.name;
        unit.session = params.session;
        if (params.assessment != null && params.assessment != undefined)
            unit.assessment = params.assessment;
        unit.practice = params.practice;
        unit.isCompleted = params.isCompleted;
        unit.userId = params.userId;
        return unit;
    }
}
exports.Unit = Unit;
//# sourceMappingURL=unit.entity.js.map