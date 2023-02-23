import { UnitEnum } from 'src/core/enums/unit.enum';
import { StatementTemplate } from '../../domain/entities/statement-template.entity';
import { PracticeTemplateDto } from './practice-template.dto';
import { SessionTemplateDto } from './session-template.dto';
export declare class TemplateDto {
    unit?: UnitEnum;
    practiceTemplate?: PracticeTemplateDto;
    sessionTemplate?: SessionTemplateDto;
    statementTemplate?: StatementTemplate;
    constructor(entity: TemplateDto);
}
