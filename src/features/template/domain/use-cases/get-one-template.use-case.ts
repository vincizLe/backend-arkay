import { UnitEnum } from 'src/core/enums/unit.enum'
import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class GetOneTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unit: UnitEnum): Promise<Template> {
		return await this.templateRepository.getOne(unit)
	}
}
