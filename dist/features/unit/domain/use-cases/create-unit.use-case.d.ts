import { UnitRepository } from '../repositories/unit.repository';
export declare class CreateUnitUseCase {
    private readonly unitRepository;
    constructor(unitRepository: UnitRepository);
    execute(userId: string): Promise<void>;
}
