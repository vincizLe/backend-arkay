import { TemplateRepository } from 'src/features/template/domain/repositories/template.repository';
import { UnitRepository } from '../../domain/repositories/unit.repository';
import { AssessmentDetailDto } from '../dto/assessment-detail.dto';
export declare class UnitService {
    private readonly unitRepository;
    private readonly templateRepository;
    constructor(unitRepository: UnitRepository, templateRepository: TemplateRepository);
    save(userId: string): Promise<void>;
    getAssessment(unitId: string): Promise<AssessmentDetailDto>;
}
