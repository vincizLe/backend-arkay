import { UnitEnum } from 'src/core/enums/unit.enum'
import { Template } from '../entities/template.entity'

export abstract class TemplateRepository {
	abstract save(template: Template): Promise<void>
	abstract getOne(unit: UnitEnum): Promise<Template>
}
