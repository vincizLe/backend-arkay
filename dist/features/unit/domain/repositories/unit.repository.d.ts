import { Assessment } from '../entities/assessment.entity';
import { Unit } from '../entities/unit.entity';
export declare abstract class UnitRepository {
    abstract saveUnit(unit: Unit): Promise<void>;
    abstract getUnitById(unitId: string): Promise<Unit>;
    abstract getAssessmentByUnitId(unitId: string): Promise<Assessment>;
}
