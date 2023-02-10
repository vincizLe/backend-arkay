export class Statement {
	id: string
	question: string
	answer: string
	alternativeAnswers = new Array<[string, string]>()
	isCompleted: boolean
	score: number

	static create(params: Statement.CreateParams): Statement {
		const statement = new Statement()

		if (params.id != null && params.id != undefined) statement.id = params.id

		statement.question = params.question
		statement.answer = params.answer
		statement.alternativeAnswers = params.alternativeAnswers
		statement.isCompleted = params.isCompleted
		statement.score = params.score

		return statement
	}
}

export namespace Statement {
	export type CreateParams = Pick<Statement, 'id' | 'question' | 'answer' | 'alternativeAnswers' | 'isCompleted' | 'score'>
}
