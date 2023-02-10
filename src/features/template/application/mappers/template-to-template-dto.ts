import { Template } from '../../domain/entities/template.entity'
import { PracticeTemplateDto } from '../dto/practice-template.dto'
import { SessionTemplateDto } from '../dto/session-template.dto'
import { StatementTemplateDto } from '../dto/statement-template.dto'
import { TemplateDto } from '../dto/template.dto'

export function templateToTemplateDto(template: Template): TemplateDto {
	return new TemplateDto({
		unitId: template.unitId,
		sessionTemplate: new SessionTemplateDto({
			sessionName: template.sessionTemplate.sessionName,
			videoUrl: template.sessionTemplate.videoUrl
		}),
		statementTemplate: new StatementTemplateDto({
			question: template.statementTemplate.question,
			answer: template.statementTemplate.answer,
			alternativeAnswers: template.statementTemplate.alternativeAnswers
		}),
		practiceTemplate: new PracticeTemplateDto({
			statement: template.practiceTemplate.statement,
			testData: template.practiceTemplate.testData,
			algorithm: template.practiceTemplate.algorithm
		})
	})
}
