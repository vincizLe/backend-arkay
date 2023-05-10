import { UnitEnum } from 'src/core/enums/unit.enum';
import { TemplateRepository } from '../../domain/repositories/template.repository';
import { PracticeTemplateDto } from '../dto/practice-template.dto';
import { SessionTemplateDto } from '../dto/session-template.dto';
import { StatementsTemplateDto } from '../dto/statement-template.dto';
import { TemplateDto } from '../dto/template.dto';
export declare class TemplateService {
    private readonly templateRepository;
    constructor(templateRepository: TemplateRepository);
    updateSessionTemplate({ sessionName, videoUrl, unit }: SessionTemplateDto): Promise<void>;
    updateStatementsTemplate({ unit, statements }: StatementsTemplateDto): Promise<void>;
    updatePracticeTemplate({ statement, testData, algorithm, unit }: PracticeTemplateDto): Promise<void>;
    getTemplate(unit: UnitEnum): Promise<TemplateDto>;
}
