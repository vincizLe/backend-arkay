import { PracticeTemplate } from '../../domain/entities/practice-template.entity'
import { SessionTemplate } from '../../domain/entities/session-template.entity'
import { StatementTemplate } from '../../domain/entities/statement-template.entity'
import { TemplateRepository } from '../../domain/repositories/template.repository'
import { GetOneTemplateUseCase } from '../../domain/use-cases/get-one-template.use-case'
import { SavePracticeTemplateUseCase } from '../../domain/use-cases/save-practice-template.use-case'
import { SaveSessionTemplateUseCase } from '../../domain/use-cases/save-session-template.use-case'
import { SaveStatementTemplateUseCase } from '../../domain/use-cases/save-statement-template.use-case'
import { PracticeTemplateDto } from '../dto/practice-template.dto'
import { SessionTemplateDto } from '../dto/session-template.dto'
import { StatementTemplateDto } from '../dto/statement-template.dto'
import { TemplateDto } from '../dto/template.dto'
import { templateToTemplateDto } from '../mappers/template-to-template-dto'

export class TemplateService {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async saveSessionTemplate(unitId: string, sessionTemplateDto: SessionTemplateDto): Promise<void> {
		const useCase = new SaveSessionTemplateUseCase(this.templateRepository)
		await useCase.execute(
			unitId,
			SessionTemplate.create({
				sessionName: sessionTemplateDto.sessionName,
				videoUrl: sessionTemplateDto.videoUrl
			})
		)
	}

	async saveStatementTemplate(unitId: string, statementTemplateDto: StatementTemplateDto): Promise<void> {
		const useCase = new SaveStatementTemplateUseCase(this.templateRepository)
		await useCase.execute(
			unitId,
			StatementTemplate.create({
				question: statementTemplateDto.question,
				answer: statementTemplateDto.answer,
				alternativeAnswers: statementTemplateDto.alternativeAnswers
			})
		)
	}

	async savePracticeTemplate(unitId: string, practiceTemplateDto: PracticeTemplateDto): Promise<void> {
		const useCase = new SavePracticeTemplateUseCase(this.templateRepository)
		await useCase.execute(
			unitId,
			PracticeTemplate.create({
				statement: practiceTemplateDto.statement,
				testData: practiceTemplateDto.testData,
				algorithm: practiceTemplateDto.algorithm
			})
		)
	}

	async getTemplate(unitId: string): Promise<TemplateDto> {
		const useCase = new GetOneTemplateUseCase(this.templateRepository)

		return templateToTemplateDto(await useCase.execute(unitId))
	}
}
