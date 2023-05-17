import { ObjectId } from 'mongodb'
import { UnitEnum } from 'src/core/enums/unit.enum'
import { AssessmentDocument } from './assessment.document'
import { PracticeDocument } from './practice.document'
import { SessionDocument } from './session.document'

export interface UnitDocument {
	_id: ObjectId
	name: UnitEnum
	session: SessionDocument
	assessment: AssessmentDocument
	practice: PracticeDocument
	isCompleted: boolean
	userId: string
}
