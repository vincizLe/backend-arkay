import { Assessment } from '../../domain/entities/assessment.entity'
import { AssessmentDetailDto, StatementDto } from '../dto/assessment-detail.dto'

export function assessmentToAssessmentDetailDto(assessment: Assessment): AssessmentDetailDto {
	return new AssessmentDetailDto({
		id: assessment.id,
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
