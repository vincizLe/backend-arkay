"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnitUseCase = void 0;
const unit_enum_1 = require("../../../../core/enums/unit.enum");
const assessment_entity_1 = require("../entities/assessment.entity");
const unit_entity_1 = require("../entities/unit.entity");
class CreateUnitUseCase {
    constructor(unitRepository) {
        this.unitRepository = unitRepository;
    }
    async execute(userId) {
        const unitArray = new Array();
        const assessment = assessment_entity_1.Assessment.create({
            statements: undefined,
            isCompleted: false,
            score: 0
        });
        unit_enum_1.UnitEnum.toArray().forEach(unitEnum => {
            const unit = unit_entity_1.Unit.create({
                name: undefined,
                sessions: undefined,
                assessment: undefined,
                practices: undefined,
                isCompleted: false,
                userId: userId
            });
            unitArray.push(unit);
        });
        return await this.unitRepository.saveMany(unitArray);
    }
}
exports.CreateUnitUseCase = CreateUnitUseCase;
//# sourceMappingURL=create-unit.use-case.js.map