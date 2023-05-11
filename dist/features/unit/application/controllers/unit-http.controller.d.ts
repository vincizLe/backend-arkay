import { UserIdDto } from '../../../user/application/dto/user-id.dto';
import { AssessmentDetailDto } from '../dto/assessment-detail.dto';
import { UnitIdDto } from '../dto/unit-id.dto';
import { UnitService } from '../services/unit.service';
export declare class UnitHttpController {
    private readonly unitService;
    constructor(unitService: UnitService);
    createUnit({ id }: UserIdDto): Promise<void>;
    getAssessment({ unitId }: UnitIdDto): Promise<AssessmentDetailDto>;
}
