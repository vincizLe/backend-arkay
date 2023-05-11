import { StatementDocument } from './statement.document'

export interface AssessmentDocument {
	statements: Array<StatementDocument>
	isCompleted: boolean
	score?: number
}
