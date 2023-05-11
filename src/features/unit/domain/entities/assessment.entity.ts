import { Statement } from './statement.entity'

export class Assessment {
	statements = new Array<Statement>()
	isCompleted: boolean
	score?: number

	static create(params: Assessment.CreateParams): Assessment {
		const assessment = new Assessment()

		assessment.statements = params.statements
		assessment.isCompleted = params.isCompleted

		if (params.score != null && params.score != undefined) assessment.score = params.score

		return assessment
	}
}

export namespace Assessment {
	export type CreateParams = Pick<Assessment, 'statements' | 'isCompleted' | 'score'>
}
