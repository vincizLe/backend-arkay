import { TestDataDocument } from './test-data.document'

export interface PracticeTemplateDocument {
	statement: string
	algorithm: string
	testData: Array<TestDataDocument>
}
