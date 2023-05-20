import { UnitEnum } from 'src/core/enums/unit.enum';
import { UserRepository } from 'src/features/user/domain/repositories/user.repository';
import { TemplateRepository } from '../../../template/domain/repositories/template.repository';
import { UnitRepository } from '../../domain/repositories/unit.repository';
import { AssessmentDto } from '../dto/assessment.dto';
import { PracticeDto } from '../dto/practice.dto';
import { SessionDto } from '../dto/session.dto';
export declare class UnitService {
    private readonly unitRepository;
    private readonly templateRepository;
    private readonly userRepository;
    constructor(unitRepository: UnitRepository, templateRepository: TemplateRepository, userRepository: UserRepository);
    save(userId: string): Promise<void>;
    saveSession(unitName: UnitEnum, userId: string, sessionDto: SessionDto): Promise<void>;
    saveAssessment(unitName: UnitEnum, userId: string, assessmentDto: AssessmentDto): Promise<void>;
    savePractice(unitName: UnitEnum, userId: string, practiceDto: PracticeDto): Promise<void>;
    getSession(unitName: UnitEnum, userId: string): Promise<SessionDto>;
    getAssessment(unitName: UnitEnum, userId: string): Promise<AssessmentDto>;
    getPractice(unitName: UnitEnum, userId: string): Promise<PracticeDto>;
}
