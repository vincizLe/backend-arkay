import { Assessment } from '../../domain/entities/assessment.entity'
import { AssessmentDto, StatementDto } from '../dto/assessment.dto'

export function assessmentToAssessmentDto(assessment: Assessment): AssessmentDto {
	return new AssessmentDto({
		statements: assessment.statements.map(({ id, question, answer, alternativeAnswers, isCompleted, score }) => {
			return new StatementDto({
				id,
				question,
				answer,
				alternativeAnswers,
				isCompleted,
				score
			})
		}),
		isCompleted: assessment.isCompleted,
		score: assessment.score
	})
}
