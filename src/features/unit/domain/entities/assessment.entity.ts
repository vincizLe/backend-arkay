import { Statement } from './statement.entity'

export class Assessment {
	id?: string
	statements = new Array<Statement>()
	isCompleted: boolean
	score: number

	static create(params: Assessment.CreateParams): Assessment {
		const assessment = new Assessment()

		if (params.id != null && params.id != undefined) assessment.id = params.id

		assessment.statements = params.statements
		assessment.isCompleted = params.isCompleted
		assessment.score = params.score

		return assessment
	}
}

export namespace Assessment {
	export type CreateParams = Partial<Pick<Assessment, 'id'>> & Pick<Assessment, 'statements' | 'isCompleted' | 'score'>
}
