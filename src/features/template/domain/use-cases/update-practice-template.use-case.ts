import { UnitEnum } from 'src/core/enums/unit.enum'
import { PracticeTemplate } from '../entities/practice-template.entity'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class UpdatePracticeTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unit: UnitEnum, practiceTemplate: PracticeTemplate): Promise<void> {
		try {
			const template = await this.templateRepository.getOne(unit)

			template.practiceTemplate = practiceTemplate

			this.templateRepository.save(template)
		} catch (error) {
			this.templateRepository.save(
				Template.create({
					unit,
					practiceTemplate: practiceTemplate
				})
			)
		}
	}
}
