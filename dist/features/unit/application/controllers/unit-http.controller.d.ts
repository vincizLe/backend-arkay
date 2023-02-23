import { CreateManySessionsDto } from '../dto/create-many-sessions.dto';
import { SessionDetailDto } from '../dto/session-detail.dto';
import { UnitService } from '../services/unit.service';
export declare class UnitHttpController {
    private readonly unitService;
    constructor(unitService: UnitService);
    getSessionDetail(unitId: string, sessionId: string): Promise<SessionDetailDto>;
    createManySessions(createManySessionsDto: CreateManySessionsDto): Promise<void>;
}
