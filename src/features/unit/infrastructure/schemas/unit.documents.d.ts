import { ObjectId } from 'mongodb'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { AssessmentDocument } from './assessment.document'

export interface UnitDocument {
	_id: ObjectId
	name: UnitEnum
	assessment: AssessmentDocument
	isCompleted: boolean
	userId: string
}
