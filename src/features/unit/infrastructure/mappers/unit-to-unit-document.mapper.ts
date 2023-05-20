import { ObjectId } from 'mongodb'
import { Unit } from '../../domain/entities/unit.entity'
import { UnitDocument } from '../schemas/unit.documents'

export function unitToUnitDocumentMapper(unit: Unit): UnitDocument {
	return {
		_id: !!unit.id ? new ObjectId(unit.id) : new ObjectId(),
		name: unit.name,
		session: !!unit.session
			? {
					_id: !!unit.session.id ? new ObjectId(unit.session.id) : new ObjectId(),
					name: unit.session.name,
					videoUrl: unit.session.videoUrl,
					isCompleted: unit.session.isCompleted,
					score: unit.session?.score ?? 0
			  }
			: null,
		assessment: !!unit.assessment
			? {
					statements: unit.assessment.statements.map(statement => {
						return {
							_id: !!statement.id
								? new ObjectId(
										unit.id
								  )
								: new ObjectId(),
							question: statement.question,
							answer: statement.answer,
							alternativeAnswers: statement.alternativeAnswers,
							isCompleted: statement.isCompleted,
							score: statement?.score ?? null
						}
					}),
					isCompleted: unit.assessment.isCompleted,
					score: unit.assessment?.score ?? null
			  }
			: null,
		practice: {
			_id: !!unit.practice.id ? new ObjectId(unit.practice.id) : new ObjectId(),
			score: unit.practice?.score ?? null,
			isCompleted: unit.practice.isCompleted
		},
		isCompleted: unit.isCompleted,
		userId: unit.userId
	}
}
