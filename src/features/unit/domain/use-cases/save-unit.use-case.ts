import { UnitEnum } from '../../../../core/enums/unit.enum'
import { TemplateRepository } from '../../../../features/template/domain/repositories/template.repository'
import { Assessment } from '../entities/assessment.entity'
import { Practice } from '../entities/practice.entity'
import { Session } from '../entities/session.entity'
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
				session: !!template.sessionTemplate
					? Session.create({
							name: template.sessionTemplate
								.sessionName,
							videoUrl:
								template
									.sessionTemplate
									?.videoUrl ??
								null,
							isCompleted: false
					  })
					: null,
				assessment: !!template.statementsTemplate
					? Assessment.create({
							statements: template.statementsTemplate.map(
								statement => {
									return Statement.create(
										{
											question: statement.question,
											answer: statement.answer,
											alternativeAnswers: statement.alternativeAnswers,
											isCompleted: false
										}
									)
								}
							),
							isCompleted: false
					  })
					: null,
				practice: Practice.create({
					isCompleted: false
				}),
				isCompleted: false,
				userId
			})

			await this.unitRepository.save(unit)
		}
	}
}
