import { Assessment } from '../entities/assessment.entity';
import { Unit } from '../entities/unit.entity';
export declare abstract class UnitRepository {
    abstract save(unit: Unit): Promise<void>;
    abstract getById(unitId: string): Promise<Unit>;
    abstract getAssessmentByUnitId(unitId: string): Promise<Assessment>;
}
