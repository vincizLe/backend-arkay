import { ObjectId } from 'mongodb'

export interface StatementDocument {
	_id: ObjectId
	question: string
	answer: string
	alternativeAnswers: Array<string>
	isCompleted: boolean
	score?: number
}
