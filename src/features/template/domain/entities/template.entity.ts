import { UnitEnum } from 'src/core/enums/unit.enum'
import { PracticeTemplate } from './practice-template.entity'
import { SessionTemplate } from './session-template.entity'
import { StatementTemplate } from './statement-template.entity'

export class Template {
	unit: UnitEnum
	practiceTemplate?: PracticeTemplate = null
	sessionTemplate?: SessionTemplate = null
	statementsTemplate = new Array<StatementTemplate>()

	static create(params: Template.CreateParams): Template {
		const template = new Template()

		template.unit = params.unit

		if (params.practiceTemplate != null || params.practiceTemplate != undefined) template.practiceTemplate = params.practiceTemplate
		if (params.sessionTemplate != null || params.sessionTemplate != undefined) template.sessionTemplate = params.sessionTemplate
		template.statementsTemplate = params.statementsTemplate

		return template
	}
}

export namespace Template {
	export type CreateParams = Partial<Pick<Template, 'practiceTemplate' | 'sessionTemplate' | 'statementsTemplate'>> & Pick<Template, 'unit'>
}
