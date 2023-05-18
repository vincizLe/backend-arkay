import { Assessment } from '../../domain/entities/assessment.entity'
import { Practice } from '../../domain/entities/practice.entity'
import { Session } from '../../domain/entities/session.entity'
import { Statement } from '../../domain/entities/statement.entity'
import { Unit } from '../../domain/entities/unit.entity'
import { UnitDocument } from '../schemas/unit.documents'

export function unitDocumentToUnitMapper(unitDocument: UnitDocument): Unit {
	return Unit.create({
		id: unitDocument._id.toHexString(),
		name: unitDocument.name,
		session: Session.create({
			id: unitDocument.session._id.toHexString(),
			name: unitDocument.session.name,
			videoUrl: unitDocument.session.videoUrl,
			isCompleted: unitDocument.session.isCompleted,
			score: unitDocument.session.score
		}),
		assessment: Assessment.create({
			statements: unitDocument.assessment.statements.map(statement => {
				return Statement.create({
					id: statement._id.toHexString(),
					question: statement.question,
					answer: statement.answer,
					alternativeAnswers: statement.alternativeAnswers,
					isCompleted: statement.isCompleted,
					score: statement?.score ?? null
				})
			}),
			isCompleted: unitDocument.assessment.isCompleted,
			score: unitDocument.assessment?.score ?? null
		}),
		practice: Practice.create({
			id: unitDocument.practice._id.toHexString(),
			score: unitDocument.practice.score,
			isCompleted: unitDocument.practice.isCompleted
		}),
		isCompleted: unitDocument.isCompleted,
		userId: unitDocument.userId
	})
}
