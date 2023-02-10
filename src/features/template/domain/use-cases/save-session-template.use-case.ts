import { SessionTemplate } from '../entities/session-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class SaveSessionTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unitId: string, sessionTemplate: SessionTemplate): Promise<void> {
		const template = await this.templateRepository.getOne(unitId)

		if (template != null && template != undefined) {
			template.sessionTemplate = sessionTemplate

			this.templateRepository.save(template)
		} else {
			this.templateRepository.save(
				Template.create({
					unitId: unitId,
					sessionTemplate: sessionTemplate
				})
			)
		}
	}
}
