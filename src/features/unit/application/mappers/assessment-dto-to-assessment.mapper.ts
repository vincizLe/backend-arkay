import { Assessment } from '../../domain/entities/assessment.entity'
import { Statement } from '../../domain/entities/statement.entity'
import { AssessmentDto } from '../dto/assessment.dto'

export function assessmentDtoToAssessment(assessmentDto: AssessmentDto): Assessment {
	return Assessment.create({
		statements: assessmentDto.statements.map(statement => {
			return Statement.create({
				id: statement.id,
				question: statement.question,
				answer: statement.answer,
				alternativeAnswers: statement.alternativeAnswers,
				isCompleted: statement.isCompleted,
				score: statement?.score ?? 0
			})
		}),
		isCompleted: assessmentDto.isCompleted,
		score: assessmentDto?.score ?? 0
	})
}
