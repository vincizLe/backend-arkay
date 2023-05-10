import { Template } from '../../domain/entities/template.entity'
import { TemplateDocument } from '../schemas/template.document'

export function templateToTemplateDocumentMapper(template: Template): TemplateDocument {
	return {
		unit: template.unit,
		sessionTemplate:
			template.sessionTemplate != null || template.sessionTemplate != undefined
				? {
						sessionName: template.sessionTemplate.sessionName,
						videoUrl: template.sessionTemplate.videoUrl
				  }
				: null,
		practiceTemplate:
			template.practiceTemplate != null || template.practiceTemplate != undefined
				? {
						statement: template.practiceTemplate.statement,
						algorithm: template.practiceTemplate.algorithm,
						testData: template.practiceTemplate.testData.map(
							testData => {
								return {
									input: testData.input,
									output: testData.output
								}
							}
						)
				  }
				: null,
		statementsTemplate: template.statementsTemplate.map(statementTemplate => {
			return {
				question: statementTemplate.question,
				answer: statementTemplate.answer,
				alternativeAnswers: statementTemplate.alternativeAnswers
			}
		})
	}
}
