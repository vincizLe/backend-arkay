import { ObjectId } from 'mongodb'
import { Unit } from '../../domain/entities/unit.entity'
import { UnitDocument } from '../schemas/unit.documents'

export function unitToUnitDocumentMapper(unit: Unit): UnitDocument {
	return {
		_id: !!unit.id ? new ObjectId(unit.id) : new ObjectId(),
		name: unit.name,
		assessment: {
			statements: unit.assessment.statements.map(statement => {
				return {
					_id: !!statement.id ? new ObjectId(unit.id) : new ObjectId(),
					question: statement.question,
					answer: statement.answer,
					alternativeAnswers: statement.alternativeAnswers,
					isCompleted: statement.isCompleted,
					score: statement?.score ?? null
				}
			}),
			isCompleted: unit.assessment.isCompleted,
			score: unit.assessment?.score ?? null
		},
		isCompleted: unit.isCompleted,
		userId: unit.userId
	}
}
