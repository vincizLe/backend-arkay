import { UnitEnum } from 'src/core/enums/unit.enum';
import { PracticeTemplate } from './practice-template.entity';
import { SessionTemplate } from './session-template.entity';
import { StatementTemplate } from './statement-template.entity';
export declare class Template {
    unit: UnitEnum;
    practiceTemplate?: PracticeTemplate;
    sessionTemplate?: SessionTemplate;
    statementsTemplate: StatementTemplate[];
    static create(params: Template.CreateParams): Template;
}
export declare namespace Template {
    type CreateParams = Partial<Pick<Template, 'practiceTemplate' | 'sessionTemplate' | 'statementsTemplate'>> & Pick<Template, 'unit'>;
}
