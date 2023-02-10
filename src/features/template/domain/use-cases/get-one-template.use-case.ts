import { Template } from '../entities/template.entity'
import { TemplateRepository } from '../repositories/template.repository'

export class GetOneTemplateUseCase {
	constructor(private readonly templateRepository: TemplateRepository) {}

	async execute(unitId: string): Promise<Template> {
		return await this.templateRepository.getOne(unitId)
	}
}
