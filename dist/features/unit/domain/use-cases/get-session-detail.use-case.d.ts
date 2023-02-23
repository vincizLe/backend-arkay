import { Session } from '../../../unit/domain/entities/session.entity';
import { UnitRepository } from '../repositories/unit.repository';
export declare class GetSessionDetailUseCase {
    private readonly unitRepository;
    constructor(unitRepository: UnitRepository);
    execute(unitId: string, sessionId: string): Promise<Session>;
}
