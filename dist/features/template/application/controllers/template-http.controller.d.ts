import { PracticeTemplateDto } from '../dto/practice-template.dto';
import { SessionTemplateDto } from '../dto/session-template.dto';
import { StatementsTemplateDto } from '../dto/statement-template.dto';
import { TemplateDto } from '../dto/template.dto';
import { UnitDto } from '../dto/unit.dto';
import { TemplateService } from '../services/template.service';
export declare class TemplateHttpController {
    private readonly templateService;
    constructor(templateService: TemplateService);
    updateSessionTemplate(sessionTemplateDto: SessionTemplateDto): Promise<void>;
    updateStatementTemplate(statementsTemplateDto: StatementsTemplateDto): Promise<void>;
    updatePracticeTemplate(practiceTemplateDto: PracticeTemplateDto): Promise<void>;
    getTemplate({ unit }: UnitDto): Promise<TemplateDto>;
}
