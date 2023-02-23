"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
class Unit {
    constructor() {
        this.sessions = Array();
        this.practices = Array();
    }
    static create(params) {
        const unit = new Unit();
        if (params.id != null && params.id != undefined)
            unit.id = params.id;
        unit.name = params.name;
        unit.sessions = params.sessions;
        unit.assessment = params.assessment;
        unit.practices = params.practices;
        unit.isCompleted = params.isCompleted;
        unit.userId = params.userId;
        return unit;
    }
}
exports.Unit = Unit;
//# sourceMappingURL=unit.entity.js.map