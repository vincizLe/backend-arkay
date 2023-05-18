import { ObjectId } from 'mongodb'

export interface PracticeDocument {
	_id: ObjectId
	score?: number
	isCompleted: boolean
}
