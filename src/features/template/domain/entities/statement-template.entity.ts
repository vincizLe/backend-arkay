export class StatementTemplate {
	question: string
	answer: string
	alternativeAnswers = new Array<string>()

	static create(params: StatementTemplate.CreateParams): StatementTemplate {
		const statementTemplate = new StatementTemplate()

		statementTemplate.question = params.question
		statementTemplate.answer = params.answer
		statementTemplate.alternativeAnswers = params.alternativeAnswers

		return statementTemplate
	}
}

export namespace StatementTemplate {
	export type CreateParams = Pick<StatementTemplate, 'question' | 'answer' | 'alternativeAnswers'>
}
