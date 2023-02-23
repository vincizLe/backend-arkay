import { UnitEnum } from 'src/core/enums/unit.enum';
import { Template } from '../entities/template.entity';
import { TemplateRepository } from '../repositories/template.repository';
export declare class GetOneTemplateUseCase {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    execute(unit: UnitEnum): Promise<Template>;
}
