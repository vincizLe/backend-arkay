import { UnitEnum } from 'src/core/enums/unit.enum';
import { StatementTemplate } from '../entities/statement-template.entity';
import { TemplateRepository } from '../repositories/template.repository';
export declare class SaveStatementTemplateUseCase {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    execute(unit: UnitEnum, statementTemplate: StatementTemplate): Promise<void>;
}
