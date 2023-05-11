import { UserIdDto } from '../../../user/application/dto/user-id.dto';
import { AssessmentDetailDto } from '../dto/assessment-detail.dto';
import { GetAssessmentDto } from '../dto/get-assessment.dto';
import { UnitService } from '../services/unit.service';
export declare class UnitHttpController {
    private readonly unitService;
    constructor(unitService: UnitService);
    createUnit({ userId }: UserIdDto): Promise<void>;
    getAssessment({ unit, userId }: GetAssessmentDto): Promise<AssessmentDetailDto>;
}
