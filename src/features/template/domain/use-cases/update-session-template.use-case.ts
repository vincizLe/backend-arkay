import { UnitEnum } from 'src/core/enums/unit.enum'
import { SessionTemplate } from '../entities/session-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class UpdateSessionTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unit: UnitEnum, sessionTemplate: SessionTemplate): Promise<void> {
		try {
			const template = await this.templateRepository.getOne(unit)

			template.sessionTemplate = sessionTemplate

			this.templateRepository.save(template)
		} catch (error) {
			this.templateRepository.save(
				Template.create({
					unit,
					sessionTemplate: sessionTemplate
				})
			)
		}
	}
}
