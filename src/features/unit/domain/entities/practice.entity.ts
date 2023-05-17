export class Practice {
	id?: string
	//statement: string
	//testData = Array<[string, string]>()
	score?: number = 0
	isCompleted: boolean

	static create(params: Practice.CreateParams): Practice {
		const practice = new Practice()

		if (params.id != null && params.id != undefined) practice.id = params.id

		practice.isCompleted = params.isCompleted

		if (params.score != null && params.score != undefined) practice.score = params.score

		return practice
	}
}

export namespace Practice {
	export type CreateParams = Partial<Pick<Practice, 'id' | 'score'>> & Pick<Practice, 'isCompleted'>
}
