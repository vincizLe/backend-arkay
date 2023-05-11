import { Assessment } from '../../domain/entities/assessment.entity'
import { Statement } from '../../domain/entities/statement.entity'
import { AssessmentDocument } from '../schemas/assessment.document'

export function assessmentDocumentToAssessmentMapper(assessmentDocument: AssessmentDocument): Assessment {
	return Assessment.create({
		statements: assessmentDocument.statements.map(statement => {
			return Statement.create({
				id: statement._id.toHexString(),
				question: statement.question,
				answer: statement.answer,
				alternativeAnswers: statement.alternativeAnswers,
				isCompleted: statement.isCompleted,
				score: statement?.score ?? null
			})
		}),
		isCompleted: assessmentDocument.isCompleted,
		score: assessmentDocument?.score ?? null
	})
}
