import { UnitEnum } from 'src/core/enums/unit.enum';
import { StatementTemplate } from '../entities/statement-template.entity';
import { TemplateRepository } from '../repositories/template.repository';
export declare class UpdateStatementTemplateUseCase {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    execute(unit: UnitEnum, statementsTemplate: Array<StatementTemplate>): Promise<void>;
}
