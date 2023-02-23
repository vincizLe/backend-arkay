import { Unit } from '../entities/unit.entity';
export declare abstract class UnitRepository {
    abstract saveMany(units: Array<Unit>): Promise<void>;
    abstract getOne(userId: string): Promise<Unit>;
}
