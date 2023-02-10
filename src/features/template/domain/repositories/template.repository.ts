import { Template } from '../entities/template.entity'

export abstract class TemplateRepository {
	abstract save(template: Template): Promise<void>
	abstract getOne(unitId: string): Promise<Template>
}
