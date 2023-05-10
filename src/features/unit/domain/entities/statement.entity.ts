export class Statement {
	id?: string
	question: string
	answer: string
	alternativeAnswers = new Array<string>()
	isCompleted: boolean
	score?: number

	static create(params: Statement.CreateParams): Statement {
		const statement = new Statement()

		if (params.id != null && params.id != undefined) statement.id = params.id

		statement.question = params.question
		statement.answer = params.answer
		statement.alternativeAnswers = params.alternativeAnswers
		statement.isCompleted = params.isCompleted
		if (params.score != null && params.score != undefined) statement.score = params.score

		return statement
	}
}

export namespace Statement {
	export type CreateParams = Partial<Pick<Statement, 'id' | 'score'>> & Pick<Statement, 'question' | 'answer' | 'alternativeAnswers' | 'isCompleted'>
}
