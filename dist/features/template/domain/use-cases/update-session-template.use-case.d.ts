import { UnitEnum } from 'src/core/enums/unit.enum';
import { SessionTemplate } from '../entities/session-template.entity';
import { TemplateRepository } from '../repositories/template.repository';
export declare class UpdateSessionTemplateUseCase {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    execute(unit: UnitEnum, sessionTemplate: SessionTemplate): Promise<void>;
}
