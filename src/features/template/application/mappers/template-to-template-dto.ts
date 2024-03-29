import { Template } from '../../domain/entities/template.entity'
import { TestData } from '../../domain/entities/test-data.entity'
import { PracticeTemplateDto } from '../dto/practice-template.dto'
import { SessionTemplateDto } from '../dto/session-template.dto'
import { StatementTemplateDto } from '../dto/statement-template.dto'
import { TemplateDto } from '../dto/template.dto'

export function templateToTemplateDto(template: Template): TemplateDto {
	return new TemplateDto({
		unit: template.unit,
		sessionTemplate:
			template.sessionTemplate != null || template.sessionTemplate != undefined
				? new SessionTemplateDto({
						sessionName: template.sessionTemplate.sessionName,
						videoUrl: template.sessionTemplate.videoUrl
				  })
				: null,
		statementsTemplate: template.statementsTemplate.map(statementTemplate => {
			return new StatementTemplateDto({
				question: statementTemplate.question,
				answer: statementTemplate.answer,
				alternativeAnswers: statementTemplate.alternativeAnswers
			})
		}),
		practiceTemplate:
			template.practiceTemplate != null || template.practiceTemplate != undefined
				? new PracticeTemplateDto({
						statement: template.practiceTemplate.statement,
						testData: template.practiceTemplate.testData.map(
							testData => {
								return TestData.create(
									{
										input: testData.input,
										output: testData.output
									}
								)
							}
						),
						algorithm: template.practiceTemplate.algorithm
				  })
				: null
	})
}
