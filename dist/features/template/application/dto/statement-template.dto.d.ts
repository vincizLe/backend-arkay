import { UnitDto } from './unit.dto';
export declare class StatementTemplateDto extends UnitDto {
    question: string;
    answer: string;
    alternativeAnswers: string[];
    constructor(entity: StatementTemplateDto);
}
