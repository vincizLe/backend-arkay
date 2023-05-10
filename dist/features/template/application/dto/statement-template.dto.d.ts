import { UnitDto } from './unit.dto';
export declare class StatementTemplateDto {
    question: string;
    answer: string;
    alternativeAnswers: string[];
    constructor(entity: StatementTemplateDto);
}
export declare class StatementsTemplateDto extends UnitDto {
    statements: StatementTemplateDto[];
    constructor(entity: StatementsTemplateDto);
}
