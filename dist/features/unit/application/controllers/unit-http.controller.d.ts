import { UserIdDto } from '../../../user/application/dto/user-id.dto';
import { AssessmentDto } from '../dto/assessment.dto';
import { PracticeDto } from '../dto/practice.dto';
import { SessionDto } from '../dto/session.dto';
import { UnitNameDto } from '../dto/unit-name.dto';
import { UnitService } from '../services/unit.service';
export declare class UnitHttpController {
    private readonly unitService;
    constructor(unitService: UnitService);
    createUnit({ userId }: UserIdDto): Promise<void>;
    updateSession({ unitName, userId }: UnitNameDto, sessionDto: SessionDto): Promise<void>;
    updateAssessment({ unitName, userId }: UnitNameDto, assessmentDto: AssessmentDto): Promise<void>;
    updatePractice({ unitName, userId }: UnitNameDto, practiceDto: PracticeDto): Promise<void>;
    getSession({ unitName, userId }: UnitNameDto): Promise<SessionDto>;
    getAssessment({ unitName, userId }: UnitNameDto): Promise<AssessmentDto>;
    getPractice({ unitName, userId }: UnitNameDto): Promise<PracticeDto>;
}
