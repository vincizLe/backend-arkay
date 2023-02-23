import { UnitEnum } from 'src/core/enums/unit.enum'
import { PracticeTemplate } from '../../domain/entities/practice-template.entity'
import { SessionTemplate } from '../../domain/entities/session-template.entity'
import { StatementTemplate } from '../../domain/entities/statement-template.entity'
import { Template } from '../../domain/entities/template.entity'
import { TestData } from '../../domain/entities/test-data.entity'
import { TemplateDocument } from '../schemas/template.document'

export function templateDocumentToTemplate(templateDocument: TemplateDocument): Template {
	return Template.create({
		unit: templateDocument.unit as UnitEnum,
		sessionTemplate:
			templateDocument.sessionTemplate != null || templateDocument.sessionTemplate != undefined
				? SessionTemplate.create({
						sessionName: templateDocument.sessionTemplate.sessionName,
						videoUrl: templateDocument.sessionTemplate.videoUrl
				  })
				: null,
		practiceTemplate:
			templateDocument.practiceTemplate != null || templateDocument.practiceTemplate != undefined
				? PracticeTemplate.create({
						statement: templateDocument.practiceTemplate.statement,
						algorithm: templateDocument.practiceTemplate.algorithm,
						testData: templateDocument.practiceTemplate.testData.map(
							testData => {
								return TestData.create(
									{
										input: testData.input,
										output: testData.output
									}
								)
							}
						)
				  })
				: null,
		statementTemplate:
			templateDocument.statementTemplate != null || templateDocument.statementTemplate != undefined
				? StatementTemplate.create({
						question: templateDocument.statementTemplate.question,
						answer: templateDocument.statementTemplate.answer,
						alternativeAnswers: templateDocument.statementTemplate
							.alternativeAnswers
				  })
				: null
	})
}
