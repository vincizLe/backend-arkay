import { PracticeTemplate } from '../entities/practice-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class SavePracticeTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unitId: string, practiceTemplate: PracticeTemplate): Promise<void> {
		const template = await this.templateRepository.getOne(unitId)

		if (template != null && template != undefined) {
			template.practiceTemplate = practiceTemplate

			this.templateRepository.save(template)
		} else {
			this.templateRepository.save(
				Template.create({
					unitId: unitId,
					practiceTemplate: practiceTemplate
				})
			)
		}
	}
}
