import { Injectable } from '@nestjs/common'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { PracticeTemplate } from '../../domain/entities/practice-template.entity'
import { SessionTemplate } from '../../domain/entities/session-template.entity'
import { TemplateRepository } from '../../domain/repositories/template.repository'
import { GetOneTemplateUseCase } from '../../domain/use-cases/get-one-template.use-case'
import { UpdatePracticeTemplateUseCase } from '../../domain/use-cases/update-practice-template.use-case'
import { UpdateSessionTemplateUseCase } from '../../domain/use-cases/update-session-template.use-case'
import { UpdateStatementTemplateUseCase } from '../../domain/use-cases/update-statement-template.use-case'
import { PracticeTemplateDto } from '../dto/practice-template.dto'
import { SessionTemplateDto } from '../dto/session-template.dto'
import { StatementsTemplateDto } from '../dto/statement-template.dto'
import { TemplateDto } from '../dto/template.dto'
import { templateToTemplateDto } from '../mappers/template-to-template-dto'

@Injectable()
export class TemplateService {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async updateSessionTemplate({ sessionName, videoUrl, unit }: SessionTemplateDto): Promise<void> {
		const useCase = new UpdateSessionTemplateUseCase(this.templateRepository)
		await useCase.execute(
			unit,
			SessionTemplate.create({
				sessionName,
				videoUrl
			})
		)
	}

	async updateStatementsTemplate({ unit, statements }: StatementsTemplateDto): Promise<void> {
		const useCase = new UpdateStatementTemplateUseCase(this.templateRepository)
		await useCase.execute(unit, statements)
	}

	async updatePracticeTemplate({ statement, testData, algorithm, unit }: PracticeTemplateDto): Promise<void> {
		const useCase = new UpdatePracticeTemplateUseCase(this.templateRepository)
		await useCase.execute(
			unit,
			PracticeTemplate.create({
				statement,
				testData,
				algorithm
			})
		)
	}

	async getTemplate(unit: UnitEnum): Promise<TemplateDto> {
		const useCase = new GetOneTemplateUseCase(this.templateRepository)

		return templateToTemplateDto(await useCase.execute(unit))
	}
}
