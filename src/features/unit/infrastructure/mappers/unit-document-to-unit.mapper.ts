import { Assessment } from '../../domain/entities/assessment.entity'
import { Statement } from '../../domain/entities/statement.entity'
import { Unit } from '../../domain/entities/unit.entity'
import { UnitDocument } from '../schemas/unit.documents'

export function unitDocumentToUnitMapper(unitDocument: UnitDocument): Unit {
	return Unit.create({
		id: unitDocument._id.toHexString(),
		name: unitDocument.name,
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
		isCompleted: unitDocument.isCompleted,
		userId: unitDocument.userId
	})
}
