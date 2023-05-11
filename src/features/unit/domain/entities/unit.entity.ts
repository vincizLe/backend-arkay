import { UnitEnum } from '../../../../core/enums/unit.enum'
import { Assessment } from './assessment.entity'

export class Unit {
	id?: string
	name: UnitEnum
	//sessions = Array<Session>()
	assessment?: Assessment
	//practices = Array<Practice>()
	isCompleted: boolean
	userId: string

	static create(params: Unit.CreateParams): Unit {
		const unit = new Unit()

		if (params.id != null && params.id != undefined) unit.id = params.id

		unit.name = params.name
		//unit.sessions = params.sessions

		if (params.assessment != null && params.assessment != undefined) unit.assessment = params.assessment

		//unit.practices = params.practices
		unit.isCompleted = params.isCompleted
		unit.userId = params.userId

		return unit
	}
}

export namespace Unit {
	export type CreateParams = Partial<Pick<Unit, 'id' | 'assessment'>> & Pick<Unit, 'name' | 'isCompleted' | 'userId'>
}
