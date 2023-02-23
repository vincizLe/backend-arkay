import { TestData } from './test-data.entity'

export class PracticeTemplate {
	statement: string
	algorithm: string
	testData = new Array<TestData>()

	static create(params: PracticeTemplate.CreateParams): PracticeTemplate {
		const practiceTemplate = new PracticeTemplate()

		practiceTemplate.statement = params.statement
		practiceTemplate.algorithm = params.algorithm
		practiceTemplate.testData = params.testData

		return practiceTemplate
	}
}

export namespace PracticeTemplate {
	export type CreateParams = Pick<PracticeTemplate, 'statement' | 'algorithm' | 'testData'>
}
