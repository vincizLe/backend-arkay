export class TestData {
	input: string
	output: string

	static create(params: TestData.CreateParams): TestData {
		const testData = new TestData()

		testData.input = params.input
		testData.output = params.output

		return testData
	}
}

export namespace TestData {
	export type CreateParams = Pick<TestData, 'input' | 'output'>
}
