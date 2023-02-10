import { StatementTemplate } from '../entities/statement-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class SaveStatementTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unitId: string, statementTemplate: StatementTemplate): Promise<void> {
		const template = await this.templateRepository.getOne(unitId)

		if (template != null && template != undefined) {
			template.statementTemplate = statementTemplate

			this.templateRepository.save(template)
		} else {
			this.templateRepository.save(
				Template.create({
					unitId: unitId,
					statementTemplate: statementTemplate
				})
			)
		}
	}
}
