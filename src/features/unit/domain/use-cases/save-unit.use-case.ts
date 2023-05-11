import { TemplateRepository } from 'src/features/template/domain/repositories/template.repository'
import { UnitEnum } from '../../../../core/enums/unit.enum'
import { Assessment } from '../entities/assessment.entity'
import { Statement } from '../entities/statement.entity'
import { Unit } from '../entities/unit.entity'
import { UnitRepository } from '../repositories/unit.repository'

export class SaveUnitUseCase {
	constructor(private readonly unitRepository: UnitRepository, private readonly templateRepository: TemplateRepository) {}

	async execute(userId: string): Promise<void> {
		for (const unitEnum of UnitEnum.toArray()) {
			const template = await this.templateRepository.getOne(unitEnum)

			const unit = Unit.create({
				name: unitEnum,
				assessment: Assessment.create({
					statements: template.statementsTemplate.map(statement => {
						return Statement.create({
							question: statement.question,
							answer: statement.answer,
							alternativeAnswers: statement.alternativeAnswers,
							isCompleted: false
						})
					}),
					isCompleted: false
				}),
				isCompleted: false,
				userId
			})

			return await this.unitRepository.save(unit)
		}
	}
}
