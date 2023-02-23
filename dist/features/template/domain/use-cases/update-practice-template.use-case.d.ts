import { UnitEnum } from 'src/core/enums/unit.enum';
import { PracticeTemplate } from '../entities/practice-template.entity';
import { TemplateRepository } from '../repositories/template.repository';
export declare class UpdatePracticeTemplateUseCase {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    execute(unit: UnitEnum, practiceTemplate: PracticeTemplate): Promise<void>;
}
