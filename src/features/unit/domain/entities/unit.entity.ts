import { UnitEnum } from '../../../../core/enums/unit.enum'
import { Assessment } from './assessment.entity'
import { Practice } from './practice.entity'
import { Session } from './session.entity'

export class Unit {
	id?: string
	name: UnitEnum
	session?: Session
	assessment?: Assessment
	practice?: Practice
	isCompleted: boolean
	userId: string

	static create(params: Unit.CreateParams): Unit {
		const unit = new Unit()

		if (params.id != null && params.id != undefined) unit.id = params.id

		unit.name = params.name
		unit.session = params.session

		if (params.assessment != null && params.assessment != undefined) unit.assessment = params.assessment

		unit.practice = params.practice
		unit.isCompleted = params.isCompleted
		unit.userId = params.userId

		return unit
	}
}

export namespace Unit {
	export type CreateParams = Partial<Pick<Unit, 'id' | 'session' | 'assessment' | 'practice'>> & Pick<Unit, 'name' | 'isCompleted' | 'userId'>
}
