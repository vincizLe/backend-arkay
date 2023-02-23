import { UnitEnum } from 'src/core/enums/unit.enum'
import { StatementTemplate } from '../entities/statement-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class UpdateStatementTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unit: UnitEnum, statementTemplate: StatementTemplate): Promise<void> {
		try {
			const template = await this.templateRepository.getOne(unit)

			template.statementTemplate = statementTemplate

			this.templateRepository.save(template)
		} catch (error) {
			this.templateRepository.save(
				Template.create({
					unit: unit,
					statementTemplate: statementTemplate
				})
			)
		}
	}
}
