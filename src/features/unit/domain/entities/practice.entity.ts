export class Practice {
	id?: string
	statement: string
	testData = Array<[string, string]>()
	isCompleted: boolean

	static create(params: Practice.CreateParams): Practice {
		const practice = new Practice()

		if (params.id != null && params.id != undefined) practice.id = params.id

		practice.statement = params.statement
		practice.testData = params.testData
		practice.isCompleted = params.isCompleted

		return practice
	}
}

export namespace Practice {
	export type CreateParams = Partial<Pick<Practice, 'id'>> & Pick<Practice, 'statement' | 'testData' | 'isCompleted'>
}
